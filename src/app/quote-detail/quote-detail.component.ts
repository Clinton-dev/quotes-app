import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isVoted = new EventEmitter<number>();
  @Output() isDelete = new EventEmitter<boolean>();

  changeVote(vote:number) {
    this.isVoted.emit(vote);
  }

  quoteDelete(remove:boolean) {
    this.isDelete.emit(remove);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
