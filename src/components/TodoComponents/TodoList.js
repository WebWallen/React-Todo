import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor (props) {
        super(props); // pulls in the props data from app so they can be accessed in render with the "this" keyword
        console.log('TodoList', props)
    }

    render () {
        return (
            <div>
                {this.props.todos.map(todo => 
                    <Todo todo={todo} 
                          key={todo.id}
                          toggleCompleted={this.props.toggleCompleted}  
                    />
                )}
            </div>
        )
    }
}

export default TodoList;