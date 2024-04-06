export default class Book{
    id?: number;
    title: string;
    author: string;
    isbn: string;
    releaseDate: string;

    constructor(title: string, author: string, isbn: string, releaseDate: string){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.releaseDate = releaseDate;
    }
    
}