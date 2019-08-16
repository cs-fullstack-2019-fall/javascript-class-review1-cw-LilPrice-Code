function main() {
    // Put the start of your program in a main function. Create a class for Books with name, rating, genre, and author. Create 3 instances of Books and put them in an array. Afterwards print each one in the format below:
    // The book [BOOK NAME] has [RATING] stars!!
    var bookArray = [{Book_Name:[], Rating:[]}]; // this should be an empty array
    class Books {
        constructor(Name, Rating, Genre, Author) {
            this.name = Name;
            this.rating = Rating;
            this.genre = Genre;
            this.author = Author
        }
    }
    let newB1 = new Books("Harry Potter", "five", "Fantasy", "JB");
    let newB2 = new Books("Cat in The Hat", "five", "Fantasy", "DS");
    let newB3 = new Books("Of Mice and Men", "four", "Drama", "MD");
    bookArray[0].Book_Name.push(newB1.name); // you should be pushing the object as a whole into the array not in peices
    bookArray[0].Book_Name.push(newB2.name);
    bookArray[0].Book_Name.push(newB3.name);
    bookArray[0].Rating.push(newB1.rating);
    bookArray[0].Rating.push(newB2.rating);
    bookArray[0].Rating.push(newB3.rating);
    var i =0;
    while (i < bookArray[0].Book_Name.length && i < bookArray[0].Rating.length){
        console.log("The Book " + bookArray[0].Book_Name[i]+ " has " + bookArray[0].Rating[i] + " stars!!!")
        i++;
    }
    // this technically works its an inefficent way to use objects 

}
main();