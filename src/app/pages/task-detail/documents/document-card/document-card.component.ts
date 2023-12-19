import { Component, Input } from '@angular/core';

@Component({
  selector: 'acx-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.css']
})
export class DocumentCardComponent {
  @Input() documentDetail:any
}
