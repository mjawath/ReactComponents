import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DataGrid from './component/DataGrid'



class App extends Component {
    render() {
        let myitems = ["item--1","item--2","item--3","item--4","item--5","item--6"]
        const myRenderer = (data,index)=>{
            return <span>my tag cool {index}--{data}  </span>;
        };
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to ReactComponents</h2>

                </div>
                <div className="App-intro">
                    <DataGrid collection={myitems} contentRender={myRenderer}>

                    </DataGrid>
                </div>
            </div>
        );
    }
}

export default App;
