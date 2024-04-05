//2nd attempt deliverables
// fetch('http://localhost:3001/updateBook', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/Json'
//     },
//     body: JSON.stringify({
//         title: "books"
//     })
// })


//3rd attaempt
// async function getListOfBooks() {
    
//         let response = await fetch('http://localhost:3001/listBooks');
       
//         let books = await response.json();
//         return books;
    
// getListOfBooks()
//     .forEach(books => {
//         if (books) {
//             console.log('List of books:', books);
//         }
//     });


//4th attempt
// async function GetBooks() {

//     let response = await fetch('http://localhost:3001/listBooks')

//     let books = await response.json()

// }
// console.log(books)

/*the last two attempts i have put through ChatGPT and it said to use a try-catch block handle but i havent tried it yet so might see what happens */

//This code works in the console and shows the list of books as an array. Not sure if it will help with the rest of part 3.
/*Did end up using the code that ChatGTP gave me but dropped the try and catch below */
// async function getListOfBooks() {
//     try {
//         let response = await fetch('http://localhost:3001/listBooks');
//         if (!response.ok) {
//             throw new Error('Failed to fetch books');
//         }
//         let books = await response.json();
//         return books;
//     } catch (error) {
//         console.error('Error fetching books:', error);
//         return null;
//     }
// }

// getListOfBooks()
//     .then(books => {
//         if (books) {
//             console.log('List of books:', books);
//         }
//     });


// async function getListOfBooks() {
//     const response = await fetch('http://localhost:3001/listBooks')
//     const books = response.json()
//     return getListOfBooks;
//     console.log(response)
// }

// getListOfBooks() 
