import React from "react";

class TodoForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newTodo: '' // must be an empty string versus null so the handleChange behaves as intended (expects a non-empty string)
        }
    }

    handleChange = event => {
        this.setState ({
            [event.target.name]: event.target.value // bracket notation allows you to access the variable's name
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ""});
    }

    // filterCompleted = () => {
    //     console.log('filter complete: ')
    //     this.setState({
    //         todos: this.props.todos.filter(todo => {
    //             return !todo.completed // create a new array of the todo's that have not been completed
    //         })
    //     });
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                       name="newTodo" 
                       value={this.state.newTodo} 
                       onChange={this.handleChange}
                       placeholder="Add a new Todo" 
                />
                <button type="submit">Add a new todo</button>
                <button onClick={this.props.filterCompleted}>Clear completed</button>
            </form>
        )
    }
}

export default TodoForm;