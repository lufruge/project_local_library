function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
  return foundId;
}

function sortAccountsByLastName(accounts) {
  let sortedLast = accounts.sort((nameA,nameB) => nameA.name.last < nameB.name.last ? -1:1)
  console.log(sortedLast)
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  for (let i = 0 ; i < books.length ; i++) {
    for (let j = 0 ; j < books[i].borrows.length ; j++) {
      if (account.id === books[i].borrows[j].id) {
        total = total + 1
      }
    }
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let books_taken = [];
    books.forEach(book=>{
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        books_taken.push(book);
      }
    })
    console.log(books_taken);
    books_taken.forEach(book=>{
      let anAuthor = authors.find(person => person.id === book.authorId);
      book['author'] = anAuthor;
    })
    console.log(books_taken);
    return books_taken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
