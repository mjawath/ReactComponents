import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Mylist from './component/test'
import ItemDetailUI from './Item/ItemDetailUI';
import {Items} from './component/MockData';
import MyCustomDataTem from './component/MyCustomDataTem';
import DataCollectionUI from './component/DataCollectionUI';

let items = Items;
class App extends Component {

    constructor(props){
        super(props);
        // this.test = this.test.bind(this);
        this.appindex=0;
        this.state = {} //initial empty state
        this.onDataSub = this.onDataSub.bind(this);

    }

    test =(item)=>{
        this.appindex++;
        console.log(item);
        console.log(this.appindex);
    }

    overiddenTest(){
        console.log("tetetere");
    }

    onDataSub(item){
        console.log(item);
        items.push(item);

        this.setState(()=>{
            item:{}
        });
    }

    render() {

        return (


             <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>ReactComponents</h2>

                </div>
                <div className="App-intro">
                    <ItemDetailUI onSubmit={this.onDataSub}>
                    </ItemDetailUI>
                    {/*<Mylist/>*/}

                    <DataCollectionUI collection={items}  contentRender={MyCustomDataTem}
                                      selectedItem ={this.state.item}>
                    </DataCollectionUI>

               </div>
            </div>
        );
    }
}

export default App;
