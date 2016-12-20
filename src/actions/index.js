export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  console.log(1);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

// mpayload 是一个对象，用作Action携带数据的载体