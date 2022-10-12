console.log("This is tut 36");
// create a class library and implement the following:
//constructor must take the book list as an argument
//getBookList()
//issueBook(bookName, user)
//returnBook()


class library{
    constructor(bookList){
        this.bookList=bookList;
        this.issuedBooks={};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName, user){
        if(this.issuedBooks[bookName]==undefined){

            this.issuedBooks[bookName] = user;
        }
        else{
            console.log("This book has already been issued");
        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName];

    }
}