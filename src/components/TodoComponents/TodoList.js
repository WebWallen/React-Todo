import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        console.log('TodoList', props);
    }

    render() {
        return (
            <div>
                {this.props.todos.map(todo => 
                    <Todo todo={todo} id={todo.id} toggleCompleted={this.props.toggleCompleted} />
                )}
            </div>
        )
    }
}

export default TodoList;

// class TodoList extends React.Component {
//     constructor(props) {
//         super(props); // pulls in props data from app so they can be accessed in render with the "this" keyword
//         console.log('TodoList', props);
//     }

//     render() {
//         return (
//             <div>
//                 {this.props.todos.map(todo =>  // why can't I put a bracket here witout breaking the code?
//                     <Todo todo={todo} 
//                           key={todo.id}
//                           toggleCompleted={this.props.toggleCompleted}
//                     />
//                 )}
//             </div>
//         )
//     }
// }    

// export default TodoList;