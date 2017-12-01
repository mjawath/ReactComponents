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
    }

    render(){
        return <div>
                    <ItemDetailUI>

                    </ItemDetailUI>
                    <ItemListUI>

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

}