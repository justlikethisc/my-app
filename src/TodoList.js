import React, {Component} from 'react'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { item } = this.props;
        return (
            <div onClick={this.handleClick}>{item}</div>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
}

export default TodoList;
