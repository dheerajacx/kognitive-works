import { Component } from '@angular/core';

@Component({
  selector: 'acx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  numOfAttachments:number=4
  documentList={
    mainDocuments:{
      DocumentName:"DocumentName",
      summary:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vel consectetur. ",
      score:100,
      contentype:"pdf",
      documenttype:"document type",
      doumentLink:""
    },
    supportingDocuments:[
      {
        DocumentName:"DocumentName",
        summary:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vel consectetur.  Quaerat dolorem tempore maxime quo error?",
        score:100,
        contentype:"pdf",
        documenttype:"document type",
        doumentLink:""
      },
      {
        DocumentName:"DocumentName",
        summary:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vel consectetur.  Quaerat dolorem tempore maxime quo error?",
        score:100,
        contentype:"pdf",
        documenttype:"document type",
        doumentLink:""
      },
      {
        DocumentName:"DocumentName",
        summary:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vel consectetur.  Quaerat dolorem tempore maxime quo error?",
        score:100,
        contentype:"pdf",
        documenttype:"document type",
        doumentLink:""
      }
    ]
  }

}
