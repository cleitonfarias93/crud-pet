import { ListaPet } from './../models/listaPet';
import { ServicesService } from './../service/services.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.css']
})
export class TelaConsultaComponent implements OnInit {

  constructor(private service: ServicesService,
              private router: Router,
              private route: ActivatedRoute) { }

  listaPet: ListaPet[];

  deletarPet(id) {
    this.service.deletarDados(id)
    .subscribe(response => console.log(response));
  }

  editarPet(id) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  atualizarPet() {
    this.service.listarDados()
    .subscribe(response => this.listaPet = response);
  }

  ngOnInit() {
    this.service.listarDados()
    .subscribe(response => this.listaPet = response);
  }

}
