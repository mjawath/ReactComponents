
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DataGrid extends Component{

    static get propTypes() {
        return {
            collection: PropTypes.array.isRequired,
            contentRender: PropTypes.func.isRequired,
            footer: PropTypes.func.isRequired,
            itemEvent: PropTypes.func
        }
    }
    //arrow function preserves the this context
    itemEventTest =()=>{
        console.log(" DataGrid itemEventTest");
    }
    customeE(dat){
        console.log("---------------"+dat);
    }
    onParentLevelSelectedEvent=()=>{

        console.log("onParentLevelSelectedEvent "+ ++this.testCounter )
    }

    constructor(props){
        super(props);
        this.customeE = this.customeE.bind(this);
        // this.onParentLevelSelectedEvent = this.onParentLevelSelectedEvent.bind(this);
        this.testCounter = 0;
    }



    setItems(data){

    }

    render(){
        const  CustomFooter =this.props.footer;// capitalisation is importent without it , this is not working

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
            return <div>
                    {comps}
                {CustomFooter && <CustomFooter name="jawath"/>}
            </div>;
        }
       return <div>default implementation of list iteration should go her</div>
    }
}
export default DataGrid;
