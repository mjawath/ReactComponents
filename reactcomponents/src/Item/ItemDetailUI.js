import React     from 'react';
import DetailUI from '../Detail/DetailUI';
import Item from './Item';
import {Input,Form,Field} from '../component/form'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    }


    render(){
        console.log("test")
        return <div>
            <Form form="item" validate={this.handleValidate} onSubmit={this.handleSubmit}
                  formUI={this.formUI} formModel={this.formModel} >
            </Form>
            <button onClick={this.onSubmit}>test</button>
        </div>
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
        console.log(newValue)
    }

    handleSubmit(values){
        console.log("----------------------------------------------------");
        console.log(values);
    }

    handleValidate=(values)=>{
        console.log("valieaa=========================")
        console.log(values);
    }



    handleInputChange(e){
        console.log(e);
        const value = e.target.value;
        const property = e.target.name;
        const itemN = this.state.item;
        itemN[property] = value;
        this.setState(()=>{
            return{ item : itemN};
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state.item);
        this.props.onSubmit(this.state.item);
        // this.setState({item:{}});
    }
}

const initialState={
    item : {
        code:"",
        desc:"",
        qty:20,
        amount:10
    }
};
export const ADD_ITEM = "ADD_ITEM";

 const addItem=
     (payload)=> {
    return{type:ADD_ITEM,payload:payload};
}



const mapStateToProps = state => {
    return {
        // item: state.form.item
    }
};

const mapDispatchToProps = dispatch => {
    return {
        saveItem: item => {
            dispatch(addItem(item))
        }
    }
};



export  default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetailUI);