const myLibrary = [];

 const bookContainer = document.getElementById("book-container");
     bookContainer.innerHTML = ``

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    

}


function displayBook(){
    myLibrary.forEach((book , index) => {
        const bookCard =document.createElement("div")
        bookCard.classList.add("book");
        if(book.read || book.read === "on"){
            bookCard.classList.add('read');
        }
        bookCard.innerHTML = `
         <h3>${book.title}</h3>
         <p class="author">By: <span class="author-span">${book.author}</span></p>
         <p class="pages">Pages: <span class="pages-span">${book.pages}</span></p>
         <button class="remove-btn" data-index="${index}">Remove</button>
         <button class="mark" data-index="${index}">${book.read ? "Mark uread" : "Mark read"}</button>
        `
        bookContainer.appendChild(bookCard)
    })
}
const addNewBook = document.getElementById("add-book-btn")
const dialog = document.querySelector("dialog")
addNewBook.addEventListener("click", () => {
   dialog.showModal()
})
const cancelBtn = dialog.querySelector("#cancel-btn")
const addBtn = dialog.querySelector("#add-btn");

cancelBtn.addEventListener("click", () => {
    dialog.close()
})
const myForm = document.getElementById("my-form")
    myForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(myForm);
        const title = formData.get("title");
        const author = formData.get('author');
        const pages = Number(formData.get("pages"));
        const read = formData.get("read");

        addBookToLibrary(title,author,pages,read)
        myForm.reset()
        dialog.close()
        updateBookList()
       
    });

    function updateBookList() {
        bookContainer.innerHTML = "";
        displayBook();
    }
   

