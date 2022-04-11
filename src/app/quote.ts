export class Quote {
    showDescription: boolean;

    constructor(public id:number, public name:string, public author:string, public user:string, public upvotes:number, public downvotes:number, public creationDate:Date){
        this.showDescription = false;
    }
}
