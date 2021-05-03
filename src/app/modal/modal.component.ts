import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  mensaje: string;

  constructor() { }

  ngOnInit() {
    this.mensaje = '';
  }

}
