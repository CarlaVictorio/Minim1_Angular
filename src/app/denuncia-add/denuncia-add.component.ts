
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Denuncia } from '../denuncia';
import { DenunciaService } from '../denuncia.service';

@Component({
  selector: 'app-denuncia-add',
  templateUrl: './denuncia-add.component.html',
  styleUrls: [ './denuncia-add.component.css' ]
})
export class DenunciaAddComponent implements OnInit {
  denunciaAdd: any = {}; 

  constructor(
    private route: ActivatedRoute,
    private denunciaService: DenunciaService,
    private location: Location,
    
  ) {
  }
  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {

    this.denunciaAdd.fecha = new Date(this.denunciaAdd.fecha);
    this.denunciaService.addDenuncia(this.denunciaAdd)
        .subscribe(() => this.goBack());
    
  }
  
}
