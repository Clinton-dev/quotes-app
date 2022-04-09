import { Component } from '@angular/core';
import { Quote } from "./quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:"Ashes fly back into the face of him who throws them."},
    {id:2, name:"Do not follow a person who is running away."},
    {id:3, name:"He who is being carried does not realize how far the town is."},
    {id:4, name:"A flea can trouble a lion more than a lion can trouble a flea."}
  ]
}
