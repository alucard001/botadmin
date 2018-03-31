import React, { Component } from 'react';
// import InputRow from './components/InputRow';

import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	state = {
		intentOptions:[
			{
				name: "Opt 1",
				value: "opt_1"
			},
			{
				name: "Opt 2",
				value: "opt_2"
			}
		]
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
							<input className="form-control utterance" type="text" />
						</div>
						<div className="col-sm-4">
							<select className="form-control intent">
								{
								this.state.intentOptions.map(({name, value}, i) =>
									<option key={value} value={value}>{name}</option>
								)}
							</select>
						</div>
						<div className="col-sm-4">
							<button className="btn btn-primary">Create</button>
						</div>
					</div>
				</div>
      		</div>
    	);
  }
}

export default App;
