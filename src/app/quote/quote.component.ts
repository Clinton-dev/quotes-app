import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, "Ashes fly back into the face of him who throws them.", "A wise african man", "user-01", 3, 1),
    new Quote(2,"Do not follow a person who is running away.", "A wise african man", "user-02", 1, 0),
    new Quote(3,"He who is being carried does not realize how far the town is.", "A wise Chinese man", "user-03", 5, 1),
    new Quote(4,"A flea can trouble a lion more than a lion can trouble a flea.", "A wise african man", "user-02", 0, 7)
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  updateVote(vote, index) {
    if(this.quotes[index].upvotes > 0) {
      if(vote > 0) {
        this.quotes[index].upvotes += vote;
      }else {
        this.quotes[index].downvotes -= vote;
      }
    } else {
      this.quotes[index].upvotes = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
