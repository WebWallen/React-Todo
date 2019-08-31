import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
  }

  toggleCompleted = (id) => {
    this.setState({ // Without set state, any changes you attempt to make won't be reflected in the app's state.
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return {...todo, completed: !todo.completed} // Returning an object w/ original to-do array, which is why a bracket is needed
        }
        else {
          return todo;
        }
      })
    })
  }

  addTodo = task => {
    this.setState({
      todos: [...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }

  filterCompleted = () => {
    console.log('filter complete: ')
    this.setState({
        todos: this.state.todos.filter(todo => {
            return !todo.completed // create a new array of the todo's that have not been completed
        })
    });
}

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}
                  toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addTodo={this.addTodo} 
                  filterCompleted={this.filterCompleted}
        /> 
        {/* Text to the left can be anything (although it helps to keep consistent). Right must match function name. */}
      </div>
    );
  }
}

export default App;
