export class Quote {
    // id:number;
    // content:string;
    // author:string;
    // poster:string;
    showQuotes:boolean;
    constructor(public id:number, public content:string, public author:string, public poster:string, public myDate:Date){
        this.showQuotes=false;
    }
}
