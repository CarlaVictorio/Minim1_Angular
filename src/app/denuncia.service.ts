import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Denuncia } from './denuncia';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DenunciaService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  
  //The events web API expects a special header in HTTP save requests:
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private denunciasUrl = 'http://localhost:9090/denuncias';  // URL to web api


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** GET heroes from the server */
  getDenuncias(): Observable<Denuncia[]> {
    return this.http.get<Denuncia[]>(this.denunciasUrl)
      .pipe(
        tap(_ => this.log('fetched denuncias')),
        catchError(this.handleError<Denuncia[]>('getDenuncias', []))
     );
  }
/*
  getEvent(id: number): Observable<Event> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const event = EVENTS.find(h => h.id === id)!;
    this.messageService.add(`EventService: fetched event id=${id}`);
    return of(event);
  }
  */

  /** GET event by id. Will 404 if id not found */
  getDenuncia(id: string): Observable<Denuncia> {
    const url = `${this.denunciasUrl}/${id}`;
    return this.http.get<Denuncia>(url).pipe(
      tap(_ => this.log(`fetched denuncia id=${id}`)),
      catchError(this.handleError<Denuncia>(`getDenuncia id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateDenuncia(id: string, denuncia: any): Observable<any> { //any canviat
    console.log(id);
    const url = `${this.denunciasUrl}/${id}`;
    
    const resp = this.http.put(url, denuncia, this.httpOptions).pipe(
      tap(_ => this.log(`updated denuncia id=${id}`)),
      catchError(this.handleError<any>('updateDenuncia'))
    );
    return resp;

  }

  /** POST: add a new event to the server */
  addDenuncia(denuncia: any): Observable<Denuncia> {
    return this.http.post<Denuncia>(this.denunciasUrl, denuncia, this.httpOptions).pipe(
      tap((newDenuncia: Denuncia) => this.log(`added denuncia w/ id=${newDenuncia._id}`)),
      catchError(this.handleError<Denuncia>('addDenuncia'))
    );
  }

  /** DELETE: delete the event from the server */
  deleteDenuncia(id: string): Observable<Denuncia> {
    const url = `${this.denunciasUrl}/${id}`;

    return this.http.delete<Denuncia>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted denuncia id=${id}`)),
      catchError(this.handleError<Denuncia>('deleteDenuncia'))
    );
  }

    /* GET events whose name contains search term */
  searchDenuncias(term: string): Observable<Denuncia[]> {
    if (!term.trim()) {
      // if not search term, return empty event array.
      return of([]);
   }
    return this.http.get<Denuncia[]>(`${this.denunciasUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found denuncias matching "${term}"`) :
         this.log(`no denuncias matching "${term}"`)),
     catchError(this.handleError<Denuncia[]>('searchDenuncias', []))
   );
  }

  /** Log an EventService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`DenunciaService: ${message}`);
  }
}


