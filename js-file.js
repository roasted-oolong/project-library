const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.cssText = "color: blue";
document.body.appendChild(p);

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
console.log(theHobbit.info());