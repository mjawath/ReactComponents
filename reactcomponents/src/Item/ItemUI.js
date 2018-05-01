/**
 * Created by jawa on 11/22/17.
 */
import React from 'react';


import {connect} from 'react-redux';
import axios from "axios";

import EntityUI from '../Detail/EntityUI';
// import Mylist from './component/test'
import ItemDetailUI from './ItemDetailUI';
import ItemListUI from './ItemListUI';
import {Items} from '../component/MockData';
import {itemGet} from './ItemApi';

let items = Items;
class ItemUI extends EntityUI{

    constructor(){
        super();
        this.onDataSub = this.onDataSub.bind(this);
        this.state ={
            selectedItem:{}
        }
    }

    render() {

        return <div>
            <ItemDetailUI data={this.state.selectedItem} onNew={this.onNew}>

            </ItemDetailUI>

            <ItemListUI data={this.props.items} onSelectItem={this.onSelectItem}>

            </ItemListUI>
        </div>;

    }

    onNew=()=>{
        this.setState(()=>{
            return{ selectedItem:{}}
         });
    }

    onDataSub(item){
        console.log(item);
        items.push(item);

        this.setState(()=>{
            item:{}
        });
    }

    onSelectItem=(item)=>{
        // this.selectedItem = item;
        this.setState(()=>{
           return{ selectedItem:item}
        });
    }

    componentWillMount=()=>{
        this.props.onLoad();
    }

}



const mapStateToProps=(state)=> {  
    return {items: state.itemForm.items}
  }
  
  const mapDispatchToProps=(dispatch)=> {  
    return { 
        onLoad: () => {
            dispatch(itemGet());
        }
    }
}














export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemUI);