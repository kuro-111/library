const library = [];
const bookForm = document.querySelector("#bookform")



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
console.log(Book)

/**
 * Takes in a new created book, and adds it to the library array.
 * @param {object} book - Newly created Book (constructor) object
 * @return {undefined} - Doesn't return anything
 */
function addBooktoLibrary(book) {
   library.push(book);
   return;
}


addBooktoLibrary(merriam);

console.log(library);


bookForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let title = document.querySelector("#book_title");
    let author = document.querySelector("#book_author");
    let pageTotal = document.querySelector("#pagenum");
    let readBook = document.querySelector('input[name="read"]:checked')

});
/*
    PLANS FOR NEXT TIME:
    - complete making the form DONE
    - Make function to take in user form
    - Make function to display library 
    - optional make user have a button displaying specific book info
*/