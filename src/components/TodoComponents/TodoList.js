// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
	// * right now props is passing the todoData from app.js.
	constructor(props) {
		super(props);
		console.log('This is props.todoData', this.props.todoData);

		// * if you're only declaring one variable for state, use one set of curlies.
		this.state = { todos: this.props.todoData };
	}

	create = (newTodo) => {
		this.setState({
			// * making a new object and taking everything from todos and adding newTodo to it.
			todos: [ ...this.state.todos, newTodo ]
		});
	};

	remove = (id) => {
		this.setState({
			// * checking if todo.id is equal to the id being passed into the remove method.
			// * Then returning new array that will get rid of the one being passed in.
			todos: this.state.todos.filter((todo) => todo.id !== id)
		});
	};

	render() {
		const todos = this.state.todos.map((todo) => {
			return <Todo remove={this.remove} id={todo.id} key={todo.id} task={todo.task} />;
		});
		return (
			<div>
				<h1>Todo List!</h1>
				<ul>{todos}</ul>
				<TodoForm create={this.create} />
			</div>
		);
	}
}

export default TodoList;
