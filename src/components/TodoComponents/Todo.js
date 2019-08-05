import React from 'react';

class Todo extends React.Component {
	handleRemove = () => {
		this.props.remove(this.props.id);
	};

	render() {
		return (
			<div>
				<button>Edit</button>
				<button onClick={this.handleRemove}>X</button>
				<li>{this.props.task}</li>
				{/* //*don't forget to wrap your js in curlies. */}
			</div>
		);
	}
}

export default Todo;
