const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.cssText = "color: blue";
document.body.appendChild(p);

const myLibrary = [

];
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

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'unread')
addBookToLibrary('Lord of the Rings', 'J.R.R. Tolkien', 295, 'unread')
addBookToLibrary('Harry Potter', 'J.K. Rowling', 295, 'read')
console.log(myLibrary)

function displayBook() {
    const container = document.getElementById('book-container')
    container.innerHTML = ''

    myLibrary.forEach((book) => {
        const card = document.createElement('div')
        card.classList.add('book-card')
        
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong>${book.author}</p>
            <p><strong>Pages:</strong>${book.pages}</p>
            <p><strong>Status:</strong>${book.read}</p>
        `

        container.appendChild(card);
    })
}
displayBook();