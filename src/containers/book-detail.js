import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // book props不存在显示
    if (!this.props.book) {
      return (
        <div>Select a book to get started.</div>
      );
    }

    // book props存在
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

// 看有没有触发action,没有触发book就不存在
// 要挂到的组件上也就没有这个book这个props
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
