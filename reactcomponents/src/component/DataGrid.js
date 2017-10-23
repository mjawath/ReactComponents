
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DataGrid extends Component{

    static get propTypes() {
        return {
            collection: PropTypes.array.isRequired,
            contentRender: PropTypes.func.isRequired,
            itemEvent: PropTypes.func
        }
    }

    itemEventTest(){
        console.log(" DataGrid itemEventTest");
    }
    customeE(dat){
        console.log("---------------"+dat);
    }
    onParentLevelSelectedEvent(){

        console.log("onParentLevelSelectedEvent "+ ++this.testCounter )
    }

    constructor(){
        super();
        this.customeE = this.customeE.bind(this);
        this.onParentLevelSelectedEvent = this.onParentLevelSelectedEvent.bind(this);
        this.testCounter = 0;
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
                    {contentRender(item,index++,this.onParentLevelSelectedEvent)}
                    <button onClick={()=>   this.customeE(item)}>ttttttttttt</button>
                    <button onClick={this.itemEventTest}>ttttttttttt 2222222</button>
                </div>);
            }
            return <div>{comps}</div>;
        }
       return <div>default implementation of list iteration should go her</div>
    }
}
export default DataGrid;
