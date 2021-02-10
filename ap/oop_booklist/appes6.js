class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list')
        // Create tr
        const row = document.createElement('tr')
        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="delete">X</a></td>
        `
        list.appendChild(row)
    }
    showAlert(message,className){
        const div = document.createElement('div')
        div.className = (`alert ${className}`)
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div,form)
        setTimeout(()=>{
            document.querySelector('.alert').remove()
        },3000)
    }
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }
}

document.getElementById('book-form').addEventListener('submit',(e)=>{
    // get form values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value

    //Instantiate Book
    const book = new Book(title, author, isbn)
    
    //Instantiate UI object
    const ui = new UI()

    if(title===''||author===''||isbn===''){
        // Error alert
        ui.showAlert('Please Fill in all fields','error')
    } else {
        //Add book to list
        ui.addBookToList(book)
        ui.showAlert('Book Added!','success')
        // Clear Fields
        ui.clearFields()
    }
    e.preventDefault();
})

// Event listener for delete

document.getElementById('book-list').addEventListener('click',(e)=>{
    const ui = new UI()
    ui.deleteBook(e.target)
    ui.showAlert('book deleted','success')
    e.preventDefault()
})