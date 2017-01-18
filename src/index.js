import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

// Imports for components
import App from './components/app';
import Articles from './components/articles';
import Location from './components/location';
import Schedule from './components/schedule';
import Instructors from './components/instructors';
import Galerija from './components/gallery';
import Contact from './components/contact';
import Index from './components/index';

// import for reducers
import reducers from './reducers';

// creating store for data
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// render
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Index}/>
				<Route path='articles' component={Articles}/>
				<Route path='location' component={Location}/>
				<Route path='schedule' component={Schedule}/>
				<Route path='instructors' component={Instructors}/>
				<Route path='gallery' component={Galerija}/>
				<Route path='contact' component={Contact}/>
			</Route>
  	</Router>
  </Provider>
  , document.querySelector('.wrapper'));

