import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CustomerAction from '../store/actions/CustomerAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class CustomerChangePassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            customerId :sessionStorage.getItem('customerId'),
            password : '',
            errors :{}
        }
        this.update = this.update.bind(this);
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    validate = () => {
        let errors = {}
        let formIsValid = true
       
        if(!this.state.password)
        {
            formIsValid = false
            errors['password'] = '*Please enter this field '
        }
        this.setState({ errors })
        return formIsValid
   }
    update= (e) =>{
        e.preventDefault();
        if(this.validate()){ 
        let payload = {
            customerId :this.state.customerId,
            password : this.state.password,
        }
        this.props.CustomerAction.customerchangepassword(payload);
        window.location.href='/Customerhome';
    }
}
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        return(
            <div class="App">
                <Navbar/>
			    <h1>CUSTOMER CHANGE PASSWORD PAGE </h1>
				 <form >
				   
                    <label>Enter Customer Id</label>
						<input type="text" name="customerId" className="form-control" value={this.state.customerId}readOnly style={{width:"200px",display:"inline-block"}}></input><br></br>
					    <label>Enter password</label>
						<input type="text" name="password" className="form-control" value={this.state.password} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
					    <div class="red_color">{this.state.errors.password}</div><br></br>
                  
						<button className="btn btn-success" onClick={this.update}>Update</button>
                        <Link to="/Customerhome"> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
        editpass : state.CustomerReducer.editpass,
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        CustomerAction : bindActionCreators(CustomerAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(CustomerChangePassword);