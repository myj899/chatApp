import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      chat: []
    };
  }

  componentDidMount() {
  }

  render () {
  	return (
      <div className="app">
        <header><h1>Chat App</h1></header> 
        <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));