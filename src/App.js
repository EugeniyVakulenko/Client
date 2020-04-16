import React, { Component } from 'react';
import MainComponent from './components/MainComponent'


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
           <MainComponent/>
        );
    }
}

