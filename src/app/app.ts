import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('klijentske-veb-aplikacije-26');
  ime = 'Nikola'
  prezime = 'Neznanovic'
  index = '2023201244'
}
