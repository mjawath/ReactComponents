import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataTemplateUI from '../component/DataTemplateUI';

class ItemRowRender extends DataTemplateUI{


    constructor(props) {
        super(props);
        this.idx = 0;
        // this.myCustomRenderFunction = this.myCustomRenderFunction.bind(this);
    }

    render(){
        return<div>
            <span>my tag cool {this.props.index}--{this.props.data.name}  </span>
            <button className="button"
                    onClick={()=>this.myCustomRenderFunction(this.props.data)}>Edit</button>
            <button onClick={()=>this.props.onSelectedEvent({test:"new"})}>Delete</button>
        </div>;
    }
    myCustomRenderFunction(item){
        this.idx = this.idx+ 27;
        console.log("   ------  "+item+ " "+ this.idx);
        console.log("do i can execute parents event ")
        this.props.onSelectedEvent(item);
    }
}
export default ItemRowRender;