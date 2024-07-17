const library = [];
const bookForm = document.querySelector("#bookform")

let displayLibrary = document.querySelector('.library');



function Book(title, author, pageTotal, readBook) {
    this.title = title;
    this.author = author;
    this.pageTotal = pageTotal;
    this.readBook = readBook; 
    this.info = function() {
        return `${this.title}, ${this.author}, ${this.pageTotal}, ${this.readBook}`;
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

function displayLibraryObjects(){
    // Access the library

    // merriam
    library.forEach((book) => {
        // loop 0, book merriam
        // displayLibrary, change the text to book 0 (merriam)

        // loop 1 - whatever book we add
        // displayLibrary, change the text to book 1 (new book)

        // Potential fix? Instead of changing text of displayLibrary, add new things to it (book element)
        // add element instead of class
        const bookString = book.info();
        // JS <- HTML -> CSS
        /*
            1. Attach styles manually JS (newDiv.style.height = "10rem" | newDiv.style.backgroundColor)
            2. BETTER: Attach a class to the new element, style it in CSS - JS (newDiv.classList.add("library-card"))
              - CSS (style.css) .library-card { background-color: blue }
              - IS BEST because we can write lots of css in the stylesheet, without messying our JS CODE.
        */
        const newDiv = document.createElement("book_div");
        newDiv.textContent = bookString;
        displayLibrary.appendChild(newDiv);
        //add formatting for text
        console.log(bookString);
        console.log(library);
        newDiv.classList.add('library-card');
    })
}



bookForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let getTitle = document.querySelector("#book_title");
    let getAuthor = document.querySelector("#book_author");
    let getPageTotal = document.querySelector("#pagenum");
    let readBookradio = document.querySelector('input[name="read"]:checked');
    let readBook = readBookradio.value;
    let title = getTitle.value;
    let author = getAuthor.value;
    let pageTotal = getPageTotal.value;

    console.log(readBook);

   let newBook = new Book(title,author,pageTotal,readBook);

   let newLibrary = addBooktoLibrary(newBook);

   newLibrary = library;
   console.log(library);


   if (library.length>1) {
    displayLibrary.textContent = "Your Library: ";
    displayLibraryObjects(library);
}


});

//Proceed to step 5 of the Odin project assignment



/*
    PLANS FOR NEXT TIME:
    - complete making the form DONE
    - Make function to take in user form
    - Make function to display library 
    - optional make user have a button displaying specific book info
*/