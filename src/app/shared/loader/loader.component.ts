import { Component, Input } from '@angular/core';

@Component({
  selector: 'acx-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() mainText:string=''
  @Input() subText:string=''
}
