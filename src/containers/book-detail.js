import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>Select a book to get started.</div>
      );
    }

    return (
      <div>
        <br/><br/><br/><br/>
        <h1>另一组件BookDetail:</h1>
        <p>>>>>>>>>>>>>>>>>>>>>>>以下为点击上面菜单触发action后的改变数据:</p>
        <div>标题: {this.props.book.title}</div>
        <div>页数: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
