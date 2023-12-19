import { Component,Input } from '@angular/core';

@Component({
  selector: 'acx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() page:string=""

}
