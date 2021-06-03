import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    }

    componentDidMount() {
        fetch('api')
            .then(res=>res.json())
            .then(data=>this.setState({username:data.username}));
    }
    // componentDidMount() {
    //     fetch('api/group')
    //         .then(res=>res.json())
    //         .then(data=>this.setState({username:data.username}));
    // }

  render() {
    const {username} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {username ? `${username}` : 'Hello World'}
            
          </header>
        </div>
    );
    ;
  }
}

export default App;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import "./App.css";

// const useStyles = makeStyles({
//     root: {}
// });

// export default function LinearDeterminate() {
//     const classes = useStyles();
//     const [progress, setProgress] = React.useState(0);

//     React.useEffect(() => {
//         const timer = setInterval(() => {
//             setProgress((oldProgress) => {
//                 if (oldProgress === 100) {
//                     return 0;
//                 }
//                 const diff = Math.random() * 10;
//                 return Math.min(oldProgress + diff, 100);
//             });
//         }, 500);

//         return () => {
//             clearInterval(timer);
//         };
//     }, []);

//     return (
//         <div className={classes.root}>
//             <div className="title">WEESE</div>
//             <LinearProgress
//                 variant="determinate"
//                 value={progress}
//                 className="progress"
//             />
//         </div>
//     );
// }
