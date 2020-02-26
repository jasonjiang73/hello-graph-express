const authors = [
  { id: 1, name: "J,K.Rowling" },
  { id: 2, name: "J.R.R.Tolkien" },
  { id: 3, name: "Brent Weeks" }
];

const books = [
  { id: 1, name: "harry potters", authorId: 1 },
  { id: 2, name: "harry potters2", authorId: 1 },
  { id: 3, name: "harry potters3", authorId: 1 },
  { id: 4, name: "ring 1", authorId: 2 },
  { id: 5, name: "ring 2", authorId: 2 },
  { id: 6, name: "ring 3", authorId: 2 },
  { id: 7, name: "shadow 1", authorId: 3 },
  { id: 8, name: "shadow 2", authorId: 3 }
];

module.exports.authors = authors;
module.exports.books = books;