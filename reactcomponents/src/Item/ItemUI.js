/**
 * Created by jawa on 11/22/17.
 */
import React from 'react';
import EntityUI from '../Detail/EntityUI';
// import Mylist from './component/test'
import ItemDetailUI from './ItemDetailUI';
import ItemListUI from './ItemListUI';
import {Items} from '../component/MockData';


export default class ItemUI extends EntityUI{

    render(){
        return <div>
                    <ItemDetailUI>

                    </ItemDetailUI>
                    <ItemListUI>

                    </ItemListUI>
                </div>;

    }

}