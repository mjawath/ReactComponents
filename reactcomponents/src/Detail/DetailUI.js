import React ,{Component} from 'react';
import PropTypes from 'prop-types';


export default class DetailUI extends Component{


    constructor(props) {
        super(props);
    }


}

DetailUI.proptype = {
    item: PropTypes.object,
    onSubmit: PropTypes.func
};
