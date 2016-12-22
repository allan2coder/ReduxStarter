// store中的books数据
export default function() {
  console.log("数据来源reducer_books.js的reducer！");
  return [
    { title: '《西游记》', pages: 101 },
    { title: '《红楼梦》', pages: 39 },
    { title: '《水浒传》', pages: 85 },
    { title: '《三国演义》', pages: 1 }
  ];
}
