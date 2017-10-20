import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DataGrid from './component/DataGrid'



class App extends Component {
    render() {
        const test = (data)=>{
            return <span>my tag cool {data}</span>;
        };
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to ReactComponents</h2>

                </div>
                <div className="App-intro">

                    <DataGrid contentRender={test}></DataGrid>
                </div>
            </div>
        );
    }
}

export default App;
