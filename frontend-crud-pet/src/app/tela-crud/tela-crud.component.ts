import { ListaPet } from './../models/listaPet';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { Router, ActivatedRoute } from '@angular/router';


import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-tela-crud',
  templateUrl: './tela-crud.component.html',
  styleUrls: ['./tela-crud.component.css']
})
export class TelaCrudComponent implements OnInit {

  constructor(private service: ServicesService,
              private router: Router,
              private route: ActivatedRoute) { }

  pet: Pet = new Pet();
  listaPet: ListaPet[];
  tipoPet = ['Cachorro', 'Gato', 'Ave', 'Entre Outros'];
  sexoPet = ['Masculino', 'Feminino'];
  pt: any;


  enviarPet() {
    this.service.gravarDados(this.pet)
    .subscribe((data) => {
      console.log(data);
      this.router.navigate([''], { relativeTo: this.route });
    });

  }

  limparForm() {
    this.pet = new Pet();
  }
  ngOnInit() {
    this.pt = {
      firstDayOfWeek: 1,
      dayNames: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado' ],
      dayNamesShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ],
      dayNamesMin: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
      monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago',
      'Set', 'Out', 'Nov', 'Dez' ],
      today: 'Hoje',
      clear: 'Limpar'
  };
  }


}
