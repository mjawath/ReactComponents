
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DataGrid extends Component{

    static get propTypes() {
        return {
            collection: PropTypes.array.isRequired,
            contentRender: PropTypes.func.isRequired

        }
    }

    constructor(columns,rows){
        super();
    }

    setItems(data){

    }

    render(){

        let contentRender = this.props.contentRender;
        if(contentRender){
        let comps = [];
        let collection = this.props.collection;
            let index=0;
            for (const item of collection){
                comps.push(<div key={'DataGrid-ItemKey'+ index}>
                    {contentRender(item,index++)}
                </div>);
            }
            return <div>{comps}</div>;
        }
       return <div>default implementation of list iteration should go her</div>
    }
}
export default DataGrid;
