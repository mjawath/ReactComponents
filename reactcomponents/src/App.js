import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DataGrid from './component/DataGrid'



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

    }

    render() {
        let myitems = ["item--1","item--2","item--3","item--4","item--5","item--6"]
        const myRenderer = (data,index,onSelectedEvent)=>{
            return <div>
                        <span>my tag cool {index}--{data}  </span>
                        <button onClick={()=>this.test(data)}>push</button>
                        <button onClick={()=>{
                            console.log("test...............");
                            if(index !== 2)
                            onSelectedEvent();
                        }
                        }>parent method called</button>
            </div>;
        };
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>ReactComponents</h2>

                </div>
                <div className="App-intro">
                    <DataGrid  collection={myitems} contentRender={myRenderer} >

                    </DataGrid>
                </div>
            </div>
        );
    }
}

export default App;
