const library = [];

function Book(title, author, pageTotal, readBook) {
    this.title = title;
    this.author = author;
    this.pageTotal = pageTotal;
    this.readBook = readBook; 
    this.info = function() {
        console.log(`${this.title}, ${this.author}, ${this.pageTotal}, ${this.readBook}`);
    }
}

const merriam = new Book("Merriam's Webster Dictionary", "Noah Webster jr.", "42069", true);

merriam.info();

console.log(this.Book);

function addBooktoLibrary(Book) {

}