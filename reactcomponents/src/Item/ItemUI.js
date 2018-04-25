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

import {itemsFetchDataSuccess,itemsHasErrored} from '../Item/state/actions';

let items = Items;
class ItemUI extends EntityUI{

    constructor(){
        super();
        this.onDataSub = this.onDataSub.bind(this);
        this.state ={
            selectedItem:{}
        }
    }

    render(){

        return <div>
                    <ItemDetailUI tt={this.state.tt} data={this.state.selectedItem}>

                    </ItemDetailUI>
                    <ItemListUI onSelectItem={this.onSelectItem}>

                    </ItemListUI>
                </div>;

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
           return{ selectedItem:item,
            tt : item.name}
        });
        this.props.onLoad();
    }
}



const mapStateToProps=(state)=> {  
    return {items: state.items}
  }
  
  const mapDispatchToProps=(dispatch)=> {  
    return { 
        onLoad: () => {
            dispatch(itemsFetchData());
            console.log("test   redux");
        }
    }
}




const itemsFetchData=()=> {
    
    return (dispatch) => {
        // dispatch(itemsIsLoading(true));

        // fetch(url)
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw Error(response.statusText);
        //         }

        //         // dispatch(itemsIsLoading(false));

        //         return response;
        //     })
            // .then((response) => response.json())
            // .then((items) => dispatch(itemsFetchDataSuccess(items)))
            // .catch(() => dispatch(itemsHasErrored(true)));

            console.log("item fetching");
            
            const url = "http://localhost:8080/api/v1/items";
            axios.get(url)
            .then((response) => dispatch(itemsFetchDataSuccess( response.data)))
            .catch((response) => dispatch(itemsHasErrored(true)));

    };
}









export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemUI);