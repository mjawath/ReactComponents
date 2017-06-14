import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Items} from './component/MockData'
import Container from './component/Templatable'
import List from './component/List'


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to ReactComponents</h2>
                </div>
                <div className="App-intro">
                    This is a demo page for testing the components
                    <Container data={"my test data"}>
                        {
                            (data) =>{
                                <span>{data}</span>
                            }

                        }
                    </Container>
                </div>

                <div><span>Testing list component</span></div>
                <div className="App-intro">
                    This is a List component
                    <List collection={Items}>
                        {
                            (index,itemdata) =>
                                <div>
                                    <span>{index}</span>
                                    <span>{itemdata.desc}</span>
                                    <span>{itemdata.name}</span>
                                </div>
                        }
                    </List>
                </div>
            </div>
        );
    }
}

export default App;
