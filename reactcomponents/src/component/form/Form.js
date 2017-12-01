/**
 * Created by jawa on 11/23/17.
 */
import React,{Component} from 'react';
import {reduxForm,Field} from "redux-form";

  class Form extends Component{

    componentWillReceiveProps(nextProp){
        if(nextProp.formScal){
            console.log(nextProp.formScal)
        }
    }

    renderFields() {
        const formScal = this.props.formScal;
        if (formScal.Fields) {
            formScal.Fields.map(value => {

            });
        }

    }

    //   handleSubmit=(values)=>{
    //     // e.preventDefault();
    //     console.log("------------------------------------------");
    //     console.log(values);
    // }

    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return <form onSubmit={handleSubmit} /*action={this.props.action}*/  /*method={this.props.method ? this.props.method : 'post'}*/
                   {...this.props.extras}>
                {this.props.children}

          <div>
              <label>First Name</label>
              <div>
                  <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="First Name"
                  />
              </div>
          </div>
          <div>
              <label>Last Name</label>
              <div>
                  <Field
                      name="lastName"
                      component="input"
                      type="text"
                      placeholder="Last Name"
                  />
              </div>
          </div>

            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
             </form>
    };

}

export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(Form);
