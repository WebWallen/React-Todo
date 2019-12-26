import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newTodo: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log("Submit fired!");
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="newTodo"
                        type="text"
                        className="form-field"
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                        placeholder="Add new task here..."
                    />
                    <button className="form-field" type="submit">Add New Task</button>
                    <button className="form-field" type="submit" onClick={this.props.filterCompleted}>Clear Completed Tasks</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;

// class TodoForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             newTodo: "" // must be an empty string instead of null, because the handleChange function expects a non-empty string.
//         }
//     }

//     handleChange = event => {
//         this.setState ({
//             [event.target.name]: event.target.value // bracket notation allows you to access the variable's name
//         })
//     }

//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.addTodo(this.state.newTodo);
//         this.setState({ newTodo: ""});
//     }
    
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input className="form-field"
//                        type="text"
//                        name="newTodo"
//                        value={this.state.newTodo}
//                        onChange={this.handleChange}
//                        placeholer="Type your task here..."
//                 />
//                 <button className="form-field" type="submit">Add New Task</button>
//                 <button className="form-field" onClick={this.props.filterCompleted}>Clear Completed Tasks</button>
//             </form>
//         )
//     }
// }

// export default TodoForm;