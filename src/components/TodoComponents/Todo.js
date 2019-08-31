import React from "react";
import "./Todo.css";

class Todo extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div onClick={() => this.props.toggleCompleted(this.props.todo.id)} // must attach onClick to the specific prop's ID.
                className={this.props.todo.completed ? "completed" : ""}> 
                {this.props.todo.task}
            </div>
        )
    }
}

export default Todo;