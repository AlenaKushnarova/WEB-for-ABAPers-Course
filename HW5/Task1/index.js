
class Book{
  constructor(id, title, author, numberOfPages, dataCarrier){
    this.id = id;
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.dataCarrier = dataCarrier;
  }
  set ID(id){
    this.id = id;
  }
  set Title(title){
    this.title = title;
  }

  set Author(author){
    this.author = author;
  }
  set NumberOfPages(numberOfPages){
    this.numberOfPages = numberOfPages;
  }

  set DataCarrier(dataCarrier){
    this.dataCarrier = dataCarrier;
  }

  get ID(){
    return this.id;
  }

  get Title(){
    return this.title;
  }

  get Author(){
    return this.author;
  }

  get NumberOfPages(){
    return this.numberOfPages;
  }

  get DataCarrier(){
    return this.dataCarrier;
  }
}

class Audiobook extends Book{
  constructor(){
    super(...arguments);    
    this.dataCarrier = "CD";
  }
} 
 class Textbook extends Book{
    constructor(){      
      super(...arguments);
      this.dataCarrier = "Paper";
    }    
 }   