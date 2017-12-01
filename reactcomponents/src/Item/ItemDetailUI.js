import React     from 'react';
import DetailUI from '../Detail/DetailUI';
import Item from './Item';
import {Input,Form,Field} from '../component/form'
import PropTypes from 'prop-types';

export default class ItemDetailUI extends DetailUI {

    constructor(props) {
        super(props);
        this.item = new Item();
        this.state ={
            item: this.item
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.formData = {
            fields:[
                {name:"name", type:"text",component:"input"},
                {name:"desc", type:"text",component:"input"}
            ],
            onSubmit:this.handleSubmit
        }
    }

    handlennSubmit(values){
        console.log("----------------------------------------------------");
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
        this.setState({item:{}});
    }
    render(){
        console.log("test")
        return <div>
            <Form onSubmit={this.handlennSubmit} formScal={this.formData}>
            </Form>

            <button onClick={this.onSubmit}>test</button>
        </div>
    }

}


