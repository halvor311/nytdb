import React from 'react';
import Jumbotron from '../Jumbotron';
import Search from '../Search';
import "./style.css";
import Results from '../Results';
import axios from 'axios';
import API from '../../utils/API'


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state =
			{
				topic: "",
				startYear: "",
				endYear: ""
			};

	}
	_getState = state => {
		console.log(state)
		componentDidMount = () => {
			API.search("weather", "2017", "2018")
				.then(data => this.setState({ articles: data.data.response.docs }))
				.catch(err => console.log(err));

			handleInputChange = (event) => {
				const { name, value } = event.target;
				// Set the state for the appropriate input field.
				this.setState({
					[name]: value
				});

				// Search for articles.
				handleFormSubmit = event => {
					event.preventDefault();

					// Call the API search.
					API.search(this.state.topic, this.state.startYear, this.state.endYear)
						.then(data => this.setState({ articles: data.data.response.docs }))
						.catch(err => console.log(err));




					render() {
						return (
							<div>
								<h1 className="text-center">Welcome to the NYT!</h1>
								<Jumbotron />
								<Search getState={this._getState} />
								<Results />
							</div>
						);
					}
				}
			}
		}

		export default Home;