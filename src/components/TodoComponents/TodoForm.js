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
    }

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
            </form>
        )
    }
}

export default TodoForm;