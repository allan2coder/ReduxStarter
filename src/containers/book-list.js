import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        // 初始状态自动渲染books、
        // 点击一下，把book传递给action creator
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>菜单组件</h1>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books
  };
}

// mapDispatchToProps负责返回一个 dispatchProps: actionCreator的key和dispatch(action)的组合
function mapDispatchToProps(dispatch) {
  // 有多个action的时候可以使用：bindActionCreators(actionCreators,dispatch) 
  // bindActionCreators 的作用就是将 Actions 和 dispatch 组合起来生成 mapDispatchToProps 需要生成的内容。
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect 会把State和dispatch转换成props传递给子组件
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BookList);
