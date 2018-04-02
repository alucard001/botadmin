import React, { Component } from 'react';
import axios from 'axios';

// import InputRow from './components/InputRow';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			intentOptions: [],
			utterance: '',
			intent: ''
		};

		const app_id = '33847639-beb9-4237-8c4b-a44166e70b77';
		const version = 0.1;

		this.axiosInstance = axios.create({
			baseURL: `https://westus.api.cognitive.microsoft.com/luis/api/v2.0/apps/${app_id}/versions/${version}`,
			headers: {
				"Content-Type": 'application/json',
				"Ocp-Apim-Subscription-Key": 'e790f6ad71e048e5bb57998c81a44ca1'
			}
		});
	}

	componentWillMount = () => {
	}

	componentDidMount = () => {
		this.getLUISIntent();
	}

	componentDidUpdate = (prevProps, prevState) => {
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		return true;
	}

	getLUISIntent = () => {
		return this.axiosInstance.get('/intents')
			.then((res) => {
				this.setState({
					intentOptions: res.data
				});
			});
	}

	getLUISEntities = () => {
		return this.axiosInstance.get()
	}

	submitToLUIS = () => {
		console.log("Submit to LUIS: ", this.state);

		// text and intentName are MS BotFramework variables.
		// Ref: https://westus.dev.cognitive.microsoft.com/docs/services/5890b47c39e2bb17b84a55ff/operations/5890b47c39e2bb052c5b9c08
		let json = {};
		json.text = this.state.utterance;
		json.intentName = this.state.intent;

		if(this.state.intent !== ''){
			this.axiosInstance.post('/example', json)
				.then((res) => {
					console.log(res.data);
				});
		}
	};

	onChangeSelect = (e) => {
		this.setIntent(e);
		this.loadIntentList(e);
	}

	loadIntentList = (e) => {
		const selIntentName = e.target.value;
		console.log(selIntentName);

		let utterancesList = [];

		return utterancesList;
	}

	setIntent = (e) => {
		this.setState({intent: e.target.value});
	};

	setUtterance = (e) => {
		this.setState({utterance: e.target.value});
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="row">
						<div className="col-sm-4">Utterance</div>
						<div className="col-sm-4">Intent</div>
						<div className="col-sm-4"></div>
					</div>
					<div className="row">
						<div className="col-sm-4">
							<input className="form-control utterance" type="text" onChange={this.setUtterance} />
						</div>
						<div className="col-sm-4">
							<select className="form-control intent" onChange={this.onChangeSelect}>
								<option key="intent_defualt" value="">Select...</option>
								{this.state.intentOptions.map((obj, i) =>
									<option key={obj.id} value={obj.name}>{obj.name}</option>
								)}
							</select>
						</div>
						<div className="col-sm-4">
							<button className="btn btn-primary" onClick={this.submitToLUIS}>Create</button>
						</div>
					</div>
				</div>
      		</div>
    	);
  	}
}

export default App;
