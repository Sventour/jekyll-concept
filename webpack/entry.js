import React, { Component } from 'react';
import {render} from 'react-dom';
import {Hello} from './components/Hello';
import {Footer} from './components/Footer';
import {TwoColumnTemplate} from './main_template';
// import {Form} from './components/Form';

class App extends Component {
 render() {
	 return (
	 	<Hello />
	 	)
 }
}
// render(<App />, document.querySelector('.vimeo_footer'));