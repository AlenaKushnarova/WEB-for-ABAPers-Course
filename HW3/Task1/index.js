function Book(id, title, author, numberOfPages, dataCarrier) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.dataCarrier = dataCarrier;
}

//Setters
Book.prototype.setId = function (id) {
    this.id = id;
}

Book.prototype.setTitle = function (title) {
    this.title = title;
}


Book.prototype.setAuthor = function (author) {
    this.author = author;
}

Book.prototype.setNumberOfPages = function (numberOfPages) {
    this.numberOfPages = numberOfPages;
}


Book.prototype.setDataCarrier = function (dataCarrier) {
    this.dataCarrier = dataCarrier;
}

//Getters
Book.prototype.getId = function () {
    return this.id;
}

Book.prototype.getTitle = function () {
    return this.title;
}


Book.prototype.getAuthor = function () {
    return this.author;
}

Book.prototype.getNumberOfPages = function () {
    return this.numberOfPages;
}


Book.prototype.getDataCarrier = function () {
    return this.dataCarrier;
}

//Inherited classes

function Audiobook() {
    Book.apply(this, arguments);
    this.dataCarrier = "CD";
}

function Textbook() {
    Book.apply(this, arguments);
    this.dataCarrier = "Paper";
}

Audiobook.prototype = Object.create(Book.prototype);
Textbook.prototype = Object.create(Book.prototype);