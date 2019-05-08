var React = require('react');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
	_handleClick:function(){
		alert("Hello Chetan");
	},

	render:function(){
		return(
			<div>
				<h1>Hi chetan</h1>
				<button onClick={this._handleClick}>Say Hi</button>
			</div>
		)
	}
});