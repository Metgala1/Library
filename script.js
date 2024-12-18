const myLibrary = [];

 const bookContainer = document.getElementById("book-container");
     bookContainer.innerHTML = ``

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
addBookToLibrary("Power","Roger",250,true)
addBookToLibrary("The Hobbit", "justine Bieber", 400, false )

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    

}


function displayBook(){
    myLibrary.forEach((book,index) => {
        const bookCard =document.createElement("div")
        bookCard.classList.add("book");
        if(book.read){
            bookCard.classList.add('read');
        }
        bookCard.innerHTML = `
         <h3>${book.title}</h3>
         <p class="author">By: ${book.author}</p>
         <p class="pages">Pages: ${book.pages}</p>
         <button data-index="${index}">Remove</button>
         <button data-index="${index}">${book.read ? "Mark uread" : "Mark read"}</button>
        `
        bookContainer.appendChild(bookCard)
    })
}
displayBook()
const addNewBook = document.getElementById("add-book-btn")
const dialog = document.querySelector("dialog")
addNewBook.addEventListener("click", () => {
   dialog.showModal()
})
