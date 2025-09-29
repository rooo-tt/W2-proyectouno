import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoNuevo');
}
