import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Mylist from './component/test'



class App extends Component {
    constructor(props){
        super(props);
        // this.test = this.test.bind(this);
        this.appindex=0;
    }

    test =(item)=>{
        this.appindex++;
        console.log(item);
        console.log(this.appindex);
    }

    overiddenTest(){
        console.log("tetetere");
    }



    render() {



        return (


             <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>ReactComponents</h2>

                </div>
                <div className="App-intro">
                    <Mylist/>
               </div>
            </div>
        );
    }
}

export default App;
