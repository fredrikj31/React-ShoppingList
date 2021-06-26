import React from 'react';
import './Item.css';

class Item extends React.Component {
	constructor(props) {
		super(props);
	}

	markAsDone = () => {
		console.log("Hello World");
	}

	render() {
		return (
			<div className="Item" id={this.props.id}>
				<span className="Text">{this.props.todo}</span>
				<button className="DoneButton" onClick={this.markAsDone}>&#x2713;</button>
			</div>
		);
	}
}

export default Item;