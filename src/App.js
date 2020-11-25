import React, {Component} from 'react'
import TodoList from './TodoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      todoList: []
    };
    this.changeValue = this.changeValue.bind(this);
    this.submitVal = this.submitVal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <div>
        <input value={this.state.inputVal} onChange={this.changeValue} />
        <button onClick={this.submitVal}>提交</button>
        <ul>
        {
          this.state.todoList.map((item, index) => {
            return (
              <TodoList item={item} key={index} index={index} deleteItem={this.deleteItem} />
            )
          })
        }
        </ul>
      </div>
    );
  }

  changeValue(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  submitVal() {
    const list = [...this.state.todoList, this.state.inputVal];
    this.setState({
      todoList: list,
      inputVal: ''
    })
  }

  deleteItem(index) {
    const list = [...this.state.todoList];
    // 删除数组中的元素
    list.splice(index, 1);
    this.setState({
      todoList: list
    })
  }
}

export default App;
