import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss']
})
export class MenuTabComponent implements OnInit{
  ngOnInit(): void {
    this.__loadScript();
    this.__loadScript2();
    //alert('okokokoo');
  }
  __loadScript(): void {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    // script.src = 'assets/js/script.js';
    script.src = 'assets/vendor/js/menu.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
  __loadScript2(): void {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    // script.src = 'assets/js/script.js';
    script.src = 'assets/js/main.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

}
