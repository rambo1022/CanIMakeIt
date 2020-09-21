import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Recipes from './components/recipes/Recipes';
import Instructions from './components/recipes/instructions/Instructions';


class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container container-fluid">
					<Navbar />
					<br/>
					<Route path="/" component={Recipes} exact />
					<Route path="/recipe/instructions/:id" component={Instructions} />
				</div>
			</Router>
		);
	}
}

export default App;

