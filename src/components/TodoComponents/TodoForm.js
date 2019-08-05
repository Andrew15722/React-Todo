import React from 'react';
import uuid from 'uuid/v4';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		// * id can also be replaced by id: uuid() from the uuid library.
		// * making a new object and taking everything from current state and adding Date.now().
		this.props.create({ ...this.state, id: Date.now() });
		this.setState({ task: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="task">New Todo</label>
				<input
					type="text"
					placeholder="New Todo"
					id="task"
					name="task"
					vaule={this.state.task}
					onChange={this.handleChange}
				/>
				{console.log(this.state)}
				<button>Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;
