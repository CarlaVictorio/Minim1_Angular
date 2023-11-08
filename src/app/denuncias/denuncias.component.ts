import { Component, OnInit } from '@angular/core';
import { Denuncia } from '../denuncia';
import { DenunciaService } from '../denuncia.service'; 

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css']
})
export class DenunciasComponent implements OnInit {
  denuncias: Denuncia[] = [];

  constructor(private denunciaService: DenunciaService) { }
  
  //Ordena obtener los 'events' cuando se inicializa la pagina
  ngOnInit(): void {
    this.getDenuncias();
  }
  // Obtiene los 'heroes' proporcionados por el HeroService que a la vez le llegan del fichero de mock heroes
  getDenuncias(): void {
    this.denunciaService.getDenuncias()
    .subscribe(denuncias => this.denuncias = denuncias);
  }
  add(titulo: string): void {
    titulo = titulo.trim();
    if (!titulo) { return; }
    this.denunciaService.addDenuncia({ titulo } as Denuncia)
      .subscribe(denuncia => {
        this.denuncias.push(denuncia);
      });
  }
  delete(denuncia: Denuncia): void {
    this.denuncias = this.denuncias.filter(h => h !== denuncia);
    this.denunciaService.deleteDenuncia(denuncia._id).subscribe();
  }

  
}
