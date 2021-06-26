import React from 'react';
import Item from './Item';

class List extends React.Component {
	
	render() {
		const items = []

		for (const [index, value] of this.props.todos.entries()) {
			items.push(<Item todo={value} id={index}></Item>)
		}

		return (
			<div>
				{items}
			</div>
		);
	}
}

export default List;