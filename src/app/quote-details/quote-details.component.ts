import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  };

  // upVoteNumber:number=0;
  // downVoteNumber:number=0;

  // onClickUpVote(){
  //   this.upVoteNumber++;
  // };
  // onClickDownVote(){
  //   this.downVoteNumber++;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
