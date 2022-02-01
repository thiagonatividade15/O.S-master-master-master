import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
  


export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  menulRef(){
  const elm = document.querySelector<HTMLElement>('.sidenav')!;
  elm.style.width = '200px';
 
 }
 fecharmenulRef(){
  const elm = document.querySelector<HTMLElement>('.sidenav')!;
  elm.style.width = '0px';

 }

}

