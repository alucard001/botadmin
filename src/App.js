import React, { Component } from 'react';
// import InputRow from './components/InputRow';

import './App.css';

class App extends Component {

	constructor(props) {
		super(props);

		let intentOptions = [
			{
				name: "Opt 1",
				value: "opt_1"
			}, {
				name: "Opt 2",
				value: "opt_2"
			}
		];

		this.state = {
			intentOptions: intentOptions,
			utterance:'',
			intent:'',
		};
	}

	submitToLUIS = () => {
		console.log("Submit to LUIS: ", this.state);
	};

	setIntent = (e) => {
		this.setState({intent: e.target.value});
	};

	setUtterance = (e) => {
		this.setState({utterance: e.target.value});
	};

	componentDidUpdate = (prevProps, prevState) => {
		// this.submitToLUIS();
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		return true;
	}

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
							<select className="form-control intent" onChange={this.setIntent}>
								<option key="intent_defualt" value="">Select...</option>
								{this.state.intentOptions.map(({name, value}, i) =>
									<option key={value} value={value}>{name}</option>
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
