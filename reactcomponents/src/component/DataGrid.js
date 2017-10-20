
import React, {Component} from 'react';

class DataGrid extends Component{

    constructor(columns,rows){
        super();
    }

    setItems(data){

    }

    render(){
        const mm = this.props.contentRender;

        return <div>
            {mm('mytest')}
        </div>
    }
}
export default DataGrid;
