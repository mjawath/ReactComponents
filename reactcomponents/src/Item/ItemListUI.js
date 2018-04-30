/**
 * Created by jawa on 11/21/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import ListViewUI from '../Detail/ListViewUI';
import DataTemplateUI from '../component/DataTemplateUI';
import { Items } from '../component/MockData';
import DataCollectionUI from "../component/DataCollectionUI";

import ItemSearchUI from "./ItemSearchUI";
import {itemsFetchDataSuccess,itemsHasErrored} from '../Item/state/actions';
import {ITEMS_URL} from './Constents';
import {get} from '../component/commons/HttpComunications';
import {itemGet} from './ItemApi';


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


    onSearch=(params)=>{
        console.log("searching initiated "+params);
        this.props.onItemLoad(params);
    }

    render() {
        //for each item
        const myData = Items;

        return <div>
            <ItemSearchUI onSearch={this.onSearch}>
            </ItemSearchUI>
            <DataCollectionUI collection={this.props.data} contentRender={ItemRender}
                onSelect={this.props.onSelectItem}/>
            
        </div>;
    }

}

ItemListUI.propTypes = {

    onItemLoad: PropTypes.func

}



const mapStateToProps=(state)=> {  
    return {items: state.itemForm.items}
  }
  
  const mapDispatchToProps=(dispatch)=> {  
    return { 
        onItemLoad: () => {
            dispatch(itemGet());
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemListUI);