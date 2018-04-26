import React     from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from "axios";

import DetailUI from '../Detail/DetailUI';
import Item from './Item';
import {Input,Form,Field} from '../component/form'

import {BASE_API_URL} from '../component/commons/Constants'
import {itemSaveSuccess,itemsHasErrored} from './state/actions';

import {post} from '../component/commons/HttpComunications';

const ITEMS_URL =  "/items";

class ItemDetailUI extends DetailUI {

    constructor(props) {
        super(props);
        this.item = new Item();
        this.state ={
            item: this.item
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.formUI = {
            fields:[
                {name:"name", type:"text",component:"input" ,label:"Name"},
                {name:"desc", type:"text",component:"input",label:"Description"},
                {name:"qty", type:"text",component:"input",onChange:this.handleOnChangeQty},
                {name:"storableQty", type:"text",component:"input", onChange:this.handleOnChangeQty}
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
        this.onChangeQty = this.onChangeQty.bind(this);
        this.test = this.test.bind(this);
    }


    test=(event, newValue, previousValue)=>{
        console.log("test in itemdetail");
        let storableQty = this.props.item.values.storableQty;
        const q= (!storableQty?newValue:storableQty+newValue) ;
        const cal={
            storableQty:q
        }
        return cal;
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

    render(){
        const item = this.props.data;//{name:"test -------",desc:"desc "+new Date().getTime(),qty:60};
        return <div>
            <Form test={this.test} cc={this.props.tt}  form="item" validate={this.handleValidate} onSubmit={this.handleSubmit}
                  formUI={this.formUI} formModel={this.formModel} initialValues={item}
                  enableReinitialize={true}>
            </Form>
            <button onClick={this.tryclear}>test</button>
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
           dispatch(postItem(item));   
        },
        clear:()=>{
            // dispatch(reset("item"))
            Form.clearx(dispatch,"item");
        }
}
};

const postItem=(item )=>{
   return (dispatch)=> post(ITEMS_URL,item,
        (response) => {dispatch(itemSaveSuccess(response))},
        (error) => {dispatch(itemsHasErrored())});  
}   

// const test=(item)=>{
//     axios.post(BASE_API_URL.concat(url),body)
//       .then(response=>{
//         actionOnSuccess (response)
//       })
//       .catch(error=>{
//         actionOnFailier (error)
//       });
// }


export const ADD_ITEM = "ADD_ITEM";

 const addItem=
     (payload)=> {
    return{type:ADD_ITEM,payload:payload};
}





export  default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetailUI);

