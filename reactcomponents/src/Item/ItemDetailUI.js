import React     from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from "axios";

import DetailUI from '../Detail/DetailUI';
import Item from './Item';
import {Input,Form,Field} from '../component/form'

import {postItem, itemGet,deleteItem ,putItem} from './ItemApi';


class ItemDetailUI extends DetailUI {

    constructor(props) {
        super(props);
        this.item = new Item();
        this.state ={
            item: this.item
        };

        this.formUI = {
            fields:[
                {name:"name", type:"text",component:"input" ,label:"Name"},
                {name:"desc", type:"text",component:"input",label:"Description"},
                {name:"code", type:"text",component:"input",label:"Code"},
                {name:"storableQty", type:"text",component:"input", label:"storable",onChange:this.handleOnChangeQty},
                {name:"id", type:"hidden",component:"input"}
                //test field to check calculation
            ],
            onSubmit:this.handleSubmit,
            submitLabel:"Submit",
            clearLabel:"Clear"
        };
        this.formModel = {
            name:"test name",
            desc:" test desc",

        }

    }

    handleOnChangeQty=(event,newValue,prev)=>{
        // dispatch(addItem(values.qty));
        console.log("=================item=======================================================")
        console.log(this.props.item);
        //get current item
        // validate some thing
        // update certain properties/fields
        // this.props.saveItem(values);

        if(newValue){
            // dispatch(addItem(values));
            console.log(prev)
        }
    }
    onChangeQty =(event, newValue, previousValue)=>{
        if(newValue) {
            // this.props.saveItem(newValue);

        }
        console.log(newValue);

        //how to call childs certain update  method ??
    }

    handleSubmit=(values)=>{
        console.log("---------------------submiting data -------------------------------");
        console.log(values);
        this.props.saveItem(values);

    }

    handleValidate=(values)=>{
        // console.log("valieaa=========================")
        // console.log(values);
    }


    handleInputChange(e){
        // console.log(e);
        // const value = e.target.value;
        // const property = e.target.name;
        // const itemN = this.state.item;
        // itemN[property] = value;
        // this.setState(()=>{
        //     return{ item : itemN};
        // });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state.item);
        this.props.onSubmit(this.state.item);
        // this.setState({item:{}});
    }
    tryclear=()=>{
        this.props.clear();
    }

    onDelete=()=>{
        const item = this.props.data;
        this.props.onDelete(item.id);
    }
    
    onNew=()=>{        
        this.props.onNew();
        this.props.clear();
    }

    render(){
        const item = this.props.data;

        return <div>
            <Form  form="item" validate={this.handleValidate} onSubmit={this.handleSubmit}
                  formUI={this.formUI} formModel={this.formModel} initialValues={item}
                  enableReinitialize={true}>
            </Form>
            <button onClick={this.tryclear}>test</button>
            <button name="Delete" onClick={this.onDelete}>Delete</button>
            <button name="New" onClick={this.onNew}>New</button>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        item:  state.form.item
    }
};

const mapDispatchToProps = dispatch => {
    return {
        saveItem: item => {
            let prom = null;
        if(item.id){
            prom=dispatch(putItem(item.id,item));
        }else{
            prom=dispatch(postItem(item));
        }           
          prom.then(()=> dispatch(itemGet()));  
        },
        clear:()=>{
            dispatch(Form.clearx("item"));
        },        
        onDelete:(id)=>{
            dispatch(deleteItem(id))
            .then(()=> dispatch(itemGet()))
            .then(()=> dispatch(Form.clearx("item")));
        }
}
};

export  default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetailUI);

