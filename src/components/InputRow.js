import React, { Component } from 'react';

class InputRow extends Component {
	constructor(){
		super();
		this.state = {
			//
		}
	}
	render() {
    	return (
			<div className="input_row row-fluid">
				<div className="col-sm-3 utterance">

				</div>
				<div className="col-sm-3 btn_edit">
					<input type="edit" className="btn btn_default" />
				</div>
      		</div>
    	);
  }
}

export default InputRow;
