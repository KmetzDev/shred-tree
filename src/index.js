import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Trick from './Trick';
import Tree from './Tree';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Trick />, document.getElementById('trick'));
ReactDOM.render(<Tree />, document.getElementById('tree'));