/**
 * Created by jawa on 11/23/17.
 */
import React,{Component} from 'react';

export default class Form extends Component{

    render(){
      return <form action={this.props.action} method={this.props.method ? this.props.method : 'post'}
                   {...this.props.extras} >
                {this.props.children}
             </form>;
    };

}

