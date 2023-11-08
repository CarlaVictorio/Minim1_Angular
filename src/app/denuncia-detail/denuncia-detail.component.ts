import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Denuncia } from '../denuncia';
import { DenunciaService } from '../denuncia.service';

@Component({
  selector: 'app-denuncia-detail',
  templateUrl: './denuncia-detail.component.html',
  styleUrls: [ './denuncia-detail.component.css' ]
})
export class DenunciaDetailComponent implements OnInit {
  denuncia: Denuncia | undefined;

  constructor(
    private route: ActivatedRoute,
    private denunciaService: DenunciaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDenuncia();
  }
  // Función que obtiene los detalles del event que ha sido especificado por el usuario
  getDenuncia(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log("id",id);
    this.denunciaService.getDenuncia(id)
      .subscribe(denuncia => this.denuncia = denuncia);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.denuncia) {
    //deconstrucció
      let{_id, createdAt, updatedAt, ...savedDenuncia} = this.denuncia;
      this.denunciaService.updateDenuncia(this.denuncia._id, savedDenuncia)
        .subscribe(() => this.goBack());
    }
  }
  
}

