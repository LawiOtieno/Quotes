import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote (1, 'All of my friends who have younger siblings who are going to college or high school - my number one piece of advice is: You should learn how to program.', 'Mark Zuckerberg', 'Lawi Otieno', new Date(2021,8,20)),
    new Quote (1, 'Coding is the language of the future, and every girl should learn it. As I have learned from watching girls grow and learn in our classrooms, coding is fun, collaborative and creative.', 'Reshma Saujani', 'Kingi Elijah', new Date(2021,8,22)),
  ];

  toggleDetails(index){
    this.quotes[index].showQuotes = !this.quotes[index].showQuotes
  };

  completeQuote(isComplete, index){
    if (isComplete){
      let toDelete=confirm(`Are you you sure you want to delete  quote of: ${this.quotes[index].author} ?`)
      this.quotes.splice(index,1);
    }
  }

  // addNewQuote(quote){
  //   let quoteLength=this.quotes.length;
  //   quote.id=quoteLength+1;
  //   quote.completeDate=new Date(quote.completeDate);
  //   this.quotes.push(quote)
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
