// TODO: Import the 'prompt-sync' module to enable user input from the console.
const prompt = require('prompt-sync')();
var pause = ""
// TODO: Define a class named 'Book' with a constructor that initializes 'title', 'category', 'author', 'genre', and 'price'.
class Book {
    constructor(title,category,author,genre,price){
        this.title = title,
        this.category = category,
        this.author = author,
        this.genre = genre,
        this.price = price
    }
    
}

// TODO: Initialize an empty array named 'books' to store book objects.
var books = []

// TODO: Define a function 'addBook' that takes 'title', 'category', 'author', 'genre', and 'price' as parameters and adds a new book to the 'books' array.
function addBook(title, category, author, genre, price) {
    books.push(new Book(title,category,author,genre,price))
}

// TODO: Define a function 'searchBook' that takes 'title' as a parameter and searches for a book by its title in the 'books' array.
function searchBook(title) {
    console.clear()
    for(let i = 0; i< books.length; i++){
      if(books[i].title == title) {
        console.log(`\n\nBook is Found \n Title: ${books[i].title}\n Category: ${books[i].category}\n Author: ${books[i].author}\n Genre: ${books[i].genre}\n Price: ${books[i].price}\n`)
    }  
    }
    if(books.length == 0){
        console.log("No book stored")
        
    }
    pause = prompt()
}

// TODO: Define a function 'deleteBook' that takes 'title' as a parameter and deletes a book by its title from the 'books' array.
function deleteBook(title) {
    console.clear()
    for(let i = 0; i< books.length; i++){
      if(books[i].title == title) {
        books.splice(i)
        console.log(`deleted book titled ${title}`)
    }  
    }
    if(books.length == 0){
        console.log("No book stored")   
    }
    pause = prompt()
}

// TODO: Define a function 'showBooks' that logs all books in the 'books' array to the console.
function showBooks() {
    console.clear()
    for(let i = 0; i< books.length; i++){
        console.log(`\n\nBook no: ${i+1} \n Title: ${books[i].title}\n Category: ${books[i].category}\n Author: ${books[i].author}\n Genre: ${books[i].genre}\n Price: ${books[i].price}\n`)

    }
    if(books.length == 0){
          console.log("No book stored")
    }
    pause = prompt()
}

// TODO: Define a function 'searchBookByPrice' that takes 'price' as a parameter and searches for a book by its price in the 'books' array.
function searchBookByPrice(price) {
    console.clear()
    for(let i = 0; i< books.length; i++){
      if(books[i].price == price) {
        console.log(`\n\nBook is Found \n Title: ${books[i].title}\n Category: ${books[i].category}\n Author: ${books[i].author}\n Genre: ${books[i].genre}\n Price: ${books[i].price}\n`)
    }  
    }

    if(books.length == 0){
        console.log("No book stored")
        
    }
    pause = prompt()
}

// TODO: Define a function 'displayMenu' that displays a menu of options and handles user input to perform different actions.
function displayMenu(){
    while(true) {
        console.clear()
        console.log('1. Add book');
        console.log('2. Search book');
        console.log('3. Delete book');
        console.log('4. Show all books');
        console.log('5. Search book by price');
        console.log('6. Exit');
        // TODO: Prompt the user to enter a choice and perform the corresponding action, save the input in a variable 'choice'.
        var choice = prompt("Your choice: ")
        switch(choice) {
            case '1':
                // TODO: Prompt the user to enter book details and call 'addBook' with the provided details.
                console.clear()
                let title = prompt("Book title: ")
                let category = prompt("Book Category: ")
                let author = prompt("Book author: ")
                let genre = prompt("Book genre: ")
                let price = prompt("Book price in = $")
                addBook(title,category,author,genre,price)
                break;
            case '2':
                // TODO: Prompt the user to enter the title of the book to search and call 'searchBook' with the provided title.
                console.clear()
                let searchtitle = prompt("Book title to search: ")
                searchBook(searchtitle)
                break;
            case '3':
                // TODO: Prompt the user to enter the title of the book to delete and call 'deleteBook' with the provided title.
                console.clear()
                let todelete = prompt("Book title to delete: ")
                deleteBook(todelete)
                break;
            case '4':
                // TODO: Call 'showBooks' to display all books.
                showBooks()
                console.clear()
                break;
            case '5':
                // TODO: Prompt the user to enter the price of the book to search and call 'searchBookByPrice' with the provided price.
                console.clear()
                let searchprice = prompt("Book price to search: ")
                searchBookByPrice(searchprice)
                break;
            case '6':
                console.clear()
                console.log("Program Closed")
                return;
            default:
                console.log("Error : Invalid Choice!!")
                console.clear()
        }
    }
}

// TODO: Call 'displayMenu' to start the application.
displayMenu();
