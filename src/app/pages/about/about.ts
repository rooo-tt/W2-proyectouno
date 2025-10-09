import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'About',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  public infoServicios: Tarjeta[]
  constructor() {
    this.infoServicios = [
      {
        id: "c1",
        img: "../../../assets/radiografia.jpg",
        alt: "radiografia",
        titulo: "radiografia",
        descripcion: "Para hacer una radiografía el equipo produce rayos X que atraviesan la parte del cuerpo a examinar.",
        anualPublicacion: 2025
      },
      {
        id: "c2",
        img: "../../../assets/ecografia.jpg",
        alt: "ecografia",
        titulo: "ecografia",
        descripcion: "La ecografía es parte importante de los procedimientos de diagnóstico al servir para explorar la mayoría de los órganos del cuerpo.",
        anualPublicacion: 2025
      },
      {
        id: "c3",
        img: "../../../assets/laboratorio.jpg",
        alt: "laboratorio",
        titulo: "laboratorio",
        descripcion: "Desde análisis de sangre hasta la observación microscópica, su papel es fundamental en clínica.",
        anualPublicacion: 2025
      },
      {
        id: "c4",
        img: "../../../assets/internacion.jpg",
        alt: "internacion",
        titulo: "internacion",
        descripcion: "Es un lugar donde se combina la experiencia médica con el cuidado constante de los pacientes.",
        anualPublicacion: 2025
      },
    ]
  }
  /*variable para almacenar tarjeta seleccionada */
  tarjetaSelecionada: any = null;

  /*recibir el elemento seleccionado por parametro y le asicnamos a "tarjetaSelecionada" */
  verMas(tarjeta: any) {
    this.tarjetaSelecionada = tarjeta;
  }
}
