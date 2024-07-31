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
    library.forEach((book, i) => {
        const bookString = book.info();
        const newDiv = document.createElement("book_div");
        newDiv.setAttribute("data-set", i);
        newDiv.textContent = bookString;
        displayLibrary.appendChild(newDiv);
        //add formatting for text
        
        console.log(library);
        newDiv.classList.add('library-card');
        const removeB = document.createElement("button");
        removeB.textContent = "X";
        newDiv.appendChild(removeB);
        console.log(newDiv);
        removeB.addEventListener("click", (removeBooks));

        //add eventlistener for the remove button
    })
}


function removeBooks(e){
    const pageBook = e.target.parentNode;
    const bookIndex = pageBook.getAttribute('data-set');
    console.log(bookIndex);
     const libraryBook = library[bookIndex];
     console.log(libraryBook);
                        
     library.splice(bookIndex, 1);

     console.log(library);

     pageBook.remove();

    /*
        1) Find book
          - Find book on page (newDiv) x
          - Find book in library (get data attribute compare index to library array) x
          - Compare them
          - See if equal
          - If equal, remove from both page and library
    */
}

//add function to edit read status


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