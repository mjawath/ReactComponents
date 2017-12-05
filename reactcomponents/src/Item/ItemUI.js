/**
 * Created by jawa on 11/22/17.
 */
import React from 'react';
import EntityUI from '../Detail/EntityUI';
// import Mylist from './component/test'
import ItemDetailUI from './ItemDetailUI';
import ItemListUI from './ItemListUI';
import {Items} from '../component/MockData';

let items = Items;
export default class ItemUI extends EntityUI{

    constructor(){
        super();
        this.onDataSub = this.onDataSub.bind(this);
        this.state ={
            selectedItem:{}
        }
    }

    render(){
        console.log("=================================================================");
        console.log(this.state.selectedItem);
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
    }
}