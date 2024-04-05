// Code for part 2 - updating with PATCH method

// let response = await fetch('http://localhost:3001/updateBook', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "id": 3,
//         "title": "Ledgends of Arathrae"
//     }),
// });
// let updatedBook = await response.json();
// console.log(updatedBook);


// 1st attempt Deliverables (went back and tried this after many other attempts but had not linked the script of admin.js)

async function getBooks() {

let response = await fetch('http://localhost:3001/listBooks', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
});
let bookList = await response.json();
console.log(bookList);
}

getBooks()
    .then(bookList => {
        if (bookList) {
            console.log('List of books:', bookList);
        }
    })


    //i tried this a few time but could not get it to work unless i used renderBook as the function name below, i did end up looking at the solutions but did not think overwriting the renderBook from the index.js was right but could not get it working unless i did so
function renderBook(book) {
    
    let li = document.createElement('li')
    li.textContent = book.title

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, saveButton)

    root.append(li)
}

main();