import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import {loadAuthors} from './actions/authorActions';
import {loadCourses} from './actions/courseActions';
import configureStore from './store/configureStore';
import './styles/styles.css'; // Webpack CSS bundle

injectTapEventPlugin();

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);