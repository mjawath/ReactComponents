import React     from 'react';
import DetailUI from '../Detail/DetailUI';
import Item from './Item';
import {Input,Form} from '../component/form'
import PropTypes from 'prop-types';

export default class ItemDetailUI extends DetailUI {

    constructor(props) {
        super(props);
        this.item = new Item();
        this.state ={
            item: this.item
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        return <div>
            <Form>
                <Input/>
            </Form>

            <form method="POST">

                <label>
                    code
                    <input
                        name="name"
                        type="text"
                        value={this.state.item.name}

                        onChange={this.handleInputChange}/>
                </label><br />
                <label>
                    description
                    <input
                        name="desc"
                        type="text"
                        value={this.state.item.desc}
                        onChange={this.handleInputChange}/>
                </label>

                <label>
                    <button onClick={this.onSubmit}>pls submit </button>
                </label>
            </form>
        </div>
    }

}


