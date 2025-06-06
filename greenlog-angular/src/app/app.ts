import { Component } from '@angular/core';
import { PlanejamentoItinerarioComponent } from './planejamento-itinerario/planejamento-itinerario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlanejamentoItinerarioComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}