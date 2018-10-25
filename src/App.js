import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAJ9Q3xhchbKNCM3SvNN_8qIqvg7eSOH2w',
            authDomain: 'manager-8ebf5.firebaseapp.com',
            databaseURL: 'https://manager-8ebf5.firebaseio.com',
            projectId: 'manager-8ebf5',
            storageBucket: 'manager-8ebf5.appspot.com',
            messagingSenderId: '327685378524'
          };

          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
