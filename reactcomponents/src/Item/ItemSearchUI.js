/**
 * Created by jawa on 12/4/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ItemSearchUI extends React.Component {

    constructor(props) {
        super(props);
        
    }

    onSearch = (e)=>{
        console.log(this.textInput.value);
        this.props.onSearch  && this.props.onSearch({text:this.textInput.value})
    }
    render() {
        return <div>

        <label >search</label>
        <input type="text" ref={e=>this.textInput= e}  />
        <button onClick={e=> this.onSearch(e)}>Search </button>
        </div>;
    }

}