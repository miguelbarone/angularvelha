import { Component } from '@angular/core';
import { JogoService } from '../services/jogoservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent{
  
  constructor(private jogoService: JogoService) {}

  jogar(evento) {
    this.jogoService.jogar(evento);
  }

  cav1() {
    this.jogoService.cav1();
  }
}