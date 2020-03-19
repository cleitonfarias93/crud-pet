import { ListaPet } from './../models/listaPet';
import { ServicesService } from './../service/services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-editar',
  templateUrl: './tela-editar.component.html',
  styleUrls: ['./tela-editar.component.css']
})
export class TelaEditarComponent implements OnInit {

  constructor(private service: ServicesService,
              private router: Router,
              private route: ActivatedRoute) { }

  listaPet: ListaPet;
  tipoPet = ['Cachorro', 'Gato', 'Ave', 'Entre Outros'];
  sexoPet = ['Masculino', 'Feminino'];

  editarPet() {
    this.service.editarDados(this.listaPet[0])
    .subscribe(response => console.log(response));
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.service.consultarPetById(this.route.snapshot.params[`id`])
    .subscribe((response) => {
      this.listaPet = response;
    });
  }

}
