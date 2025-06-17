  function fetchBooks() {
    return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => {
      renderBooks(books);
    
   console.log("5th book:", books[4].name);

  fetch("https://anapioficeandfire.com/api/characters/1031")
    .then(res => res.json())
    .then(character => console.log("1031st character:", character.name));

  const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
  console.log("Total number of pages:", totalPages);

   });

}
  
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
