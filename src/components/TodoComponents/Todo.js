import React from "react";
import "./Todo.css";

class Todo extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div onClick={() => this.props.toggleCompleted(this.props.todo.id)} // must attach ID to get correct to-do item.
                 className={this.props.todo.completed ? "completed" : ""}> {/* On click, add or remove the class name "completed" */}
                 {this.props.todo.task}     
            </div>
        )
    }
}

export default Todo;