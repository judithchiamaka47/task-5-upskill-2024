// created a library array object
const library = [
    { title: null, author: null, yearPublished: null }
];

// Function to create a new book
function createBook(title, author, yearPublished) {
    return {
        title,
        author,
        yearPublished,
        getSummary() {
            return `${this.title} by ${this.author}, published in ${this.yearPublished}.`;
        }
    };
}

// Add a book to the library
function addBook(title, author, yearPublished) {
    const newBook = createBook(title, author, yearPublished);
    library.push(newBook);
    console.log(`Added: ${newBook.getSummary()}`);
}

// Function to view all books in the library
function viewBooks() {
        library.forEach(book => {
            if (book.title !== null) {
                console.log(book.getSummary());
            }
        });
}

// Function to delete a book from the library by title
function deleteBook(title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        const removedBook = library.splice(index, 1)[0];
        console.log(`Deleted: ${removedBook.getSummary()}`);
    } else {
        console.log(`Book titled "${title}" not found in the library.`);
    }
}

// Example usage
addBook("Things fall apart", "chinua Achebe", 1992);
addBook("1984", "George Orwell", 1949);
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);

viewBooks();

deleteBook("1984");

viewBooks();