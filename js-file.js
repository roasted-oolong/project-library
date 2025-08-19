const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.cssText = "color: blue";
document.body.appendChild(p);

const myLibrary = [

];
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    toggleReadStatus() {
        this.read = this.read === 'read' ? 'unread' : 'read';
    }
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
            <button class="remove-book" data-id="${book.id}">Remove</button>
            <button class="toggle-read" data-id="${book.id}">Toggle Read Status</button>
        `

        container.appendChild(card);
    })

    document.querySelectorAll('.remove-book').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            removeBookFromLibrary(id);
            displayBook();
        });
    });

    document.querySelectorAll('.toggle-read').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            toggleReadStatus(id);
            displayBook();
        });
    });
}
displayBook();

function toggleReadStatus(id) {
    const book = myLibrary.find(book => book.id === id);
    if (book) {
        book.toggleReadStatus();
    }
}

function removeBookFromLibrary(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
}

//===================
document.querySelector('.add-book').addEventListener('click', () => {
    document.getElementById('book-form').style.display = 'block';
})
document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = document.getElementById('pages').value.trim();
    const read = document.getElementById('read').value.trim();

    addBookToLibrary(title, author, pages, read);
    displayBook();

    document.getElementById('book-form').reset();
    document.getElementById('book-form').style.display = 'none';
})