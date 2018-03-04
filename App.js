import React from 'react';
import Home from './src/components/Home'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers)} >
                <Home />
            </Provider>
        );
    }
}
