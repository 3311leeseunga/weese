import React, {Component} from 'react';
import './App.css';
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:null
        };
    }

    componentDidMount() {
        fetch('api')
            .then(res=>res.json())
            .then(data=>this.setState({title:data.title}));
    }
    // componentDidMount() {
    //     fetch('api/group')
    //         .then(res=>res.json())
    //         .then(data=>this.setState({username:data.username}));
    // }

  render() {
    const {title} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {title ? `${title}` : `${title}`}
            <div className="buttons">
                <button className="signIn">LOGIN</button>
                <button className="signUp">JOIN</button>
            </div>
          </header>
        </div>
    );
    ;
  }
}

export default App;
