import { Component } from '@angular/core';
import { Quote } from "./quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:"Ashes fly back into the face of him who throws them.", author: "A wise african man", user: "user-01", upvotes: 3, downvotes: 1 },
    {id:2, name:"Do not follow a person who is running away.", author: "A wise african man", user:"user-02", upvotes: 1, downvotes: 0},
    {id:3, name:"He who is being carried does not realize how far the town is.", author: "A wise Chinese man", user:"user-03", upvotes: 5, downvotes: 3},
    {id:4, name:"A flea can trouble a lion more than a lion can trouble a flea.", author: "A wise african man", user:"user-02", upvotes: 0, downvotes: 7}
  ]
}
