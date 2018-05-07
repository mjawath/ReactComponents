/**
 * Created by jawa on 11/21/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import ListViewUI from '../Detail/ListViewUI';
import DataTemplateUI from '../component/DataTemplateUI';
import { Items } from '../component/MockData';
import DataCollectionUI from "../component/DataCollectionUI";

import ItemSearchUI from "./ItemSearchUI";
import { itemsFetchDataSuccess, itemsHasErrored } from '../Item/state/actions';
import { ITEMS_URL } from './Constents';
import { get } from '../component/commons/HttpComunications';
import { itemGet } from './ItemApi';



class ItemRender extends DataTemplateUI {

    render() {
        const item = this.props.data;

        return <div>
            <div className="data-collection-cell">{item.name}</div>
            <div className="data-collection-cell">{item.desc}</div>
            <div className="data-collection-cell">{item.qty}</div>
            <div className="data-collection-cell">{item.storableQty}</div>
        </div>;
    }
}

class ItemListUI extends ListViewUI {

    constructor(){
        super();
        this.randomUIKey = "list" + Math.random();
    }

    // onSearch = (params) => {
    //     console.log("searching initiated " + this.randomUIKey);
    //     this.props.onItemLoad(this.randomUIKey);
    //     // this.props.onItem(this.randomUIKey);
    // }

    render() {
        //for each item
        const myData = Items;
        const {  ui } = this.props;
        return <div>
            <ItemSearchUI onSearch={this.onSearch}>
            </ItemSearchUI>
            {ui && ui.meta && ui.meta.key == this.randomUIKey && ui.meta.status 
            && <span>loading ...........</span>}
           
            <DataCollectionUI collection={this.props.data} contentRender={ItemRender}
                onSelect={this.props.onSelectItem} />
        <button onClick={this.onSearch}> test</button>
        </div>;
    }
    
    

}


ItemListUI.propTypes = {

    onItemLoad: PropTypes.func

}



const mapStateToProps = (state) => {
    return {
        items: state.itemForm.items,
        ui: state.ui
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onItemLoad: (params) => {
            dispatch(itemGet(params));
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemListUI);