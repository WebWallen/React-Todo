import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";

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
          return {...todo, completed: !todo.completed} // Why is this in a bracket vs parenthesis? Ask on Monday.
        }
        else {
          return todo;
        }
      })
    })
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
      </div>
    );
  }
}

export default App;
