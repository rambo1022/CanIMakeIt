import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import Recipes from './components/recipes/Recipes';
import Instructions from './components/recipes/instructions/Instructions';


class App extends React.Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Navbar />

					<div className="container container-fluid">
						<Switch>
							<Route path="/" component={Recipes} exact />
							<Route path="/recipe/instructions/:id" component={Instructions} />
						</Switch>
					</div>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;

