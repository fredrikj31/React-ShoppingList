import React from 'react';
import './Header.css';

function Header(props) {
	return (
		<h1 className="Header">{props.title}</h1>
	);
}

export default Header;