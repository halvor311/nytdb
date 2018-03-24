import React from 'react';
import Jumbotron from '../Jumbotron';
import Search from '../Search';
import "./style.css";
import Results from '../Results';


class Home extends React.Component{
	render (){
		return(
		<div>
			<h1 className = "text-center">Welcome to the NYT!</h1>
			<Jumbotron />
			<Search />
			<Results />
		</div>
		);
}
}

export default Home;