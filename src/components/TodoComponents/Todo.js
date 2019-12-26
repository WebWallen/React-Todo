import React from "react";
import "./Todo.css";

class Todo extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div onClick={() => this.props.toggleCompleted(this.props.todo.id)}
                 className={this.props.todo.completed ? "completed" : ""}>
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}

export default Todo;