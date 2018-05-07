
import React ,{Component} from 'react';

export default class ListViewUI extends Component{

    render(){
        return <div>List view container</div>
    }

    onSearch = (params) => {
        console.log("searching initiated " + this.randomUIKey);
        this.props.onItemLoad(this.randomUIKey);
        // this.props.onItem(this.randomUIKey);
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onItemLoad: (params) => {
//             dispatch(itemGet(params));
//         }
//     }
// }