// 等待被触发的action、
// 点击菜单时触发！


// 这是一个ActionCreator
export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  console.log("点击菜单时触发action！");
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

// payload 是一个对象，用作Action携带数据的载体
// 上述代码中，表示名字为BOOK_SELECTED的Action,
// 它携带的信息是字符串book。