const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.cssText = "color: blue";
document.body.appendChild(p);

const myLibrary = [];
function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
console.log(myLibrary)