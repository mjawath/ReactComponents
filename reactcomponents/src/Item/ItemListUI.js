/**
 * Created by jawa on 11/21/17.
 */
import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import ListViewUI from '../Detail/ListViewUI';
import DataTemplateUI from '../component/DataTemplateUI';
import {Items} from '../component/MockData';
import DataCollectionUI from "../component/DataCollectionUI";


class ItemRender extends DataTemplateUI{

    render(){
        const item = this.props.data;

        return <div>
            <div>{item.name}</div>
            <div>{item.desc}</div>
            <div>{item.qty}</div>
            <div>{item.storableQty}</div>
        </div>;
    }
}

export default class ItemListUI extends ListViewUI{


    render(){
        //for each item
        const myData = Items;

        return <div>
            <DataCollectionUI collection={myData} contentRender={ItemRender}
                              onSelect={this.props.onSelectItem}
            />
        </div>;
    }


}

ItemListUI.propTypes = {

    onSelectItem: PropTypes.func

}