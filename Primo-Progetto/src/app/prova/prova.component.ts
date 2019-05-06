import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {
  
 isLiked = false;

  clickedLike(ev: MouseEvent) {
    console.log("cliccato like!", this.isLiked);
    this.isLiked = !this.isLiked;

    console.log("Dopo click", ev.x, ev.y);
    ev.preventDefault();
  }

  constructor() { }

  ngOnInit() {
  }
}

