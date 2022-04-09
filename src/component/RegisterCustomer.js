import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CustomerAction from '../store/actions/CustomerAction'
import {Redirect} from 'react-router-dom';
import Navbar from './Navbar';

class RegisterCustomer extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName : '',
            lastName : '',
            email :'',
            mobile:'',
            city:'',
            password:'',
            errors:{}
        }
        this.custRegistration = this.custRegistration.bind(this);
    }
   validation = () =>{
      let errors = {}
      let formIsValid = true
      if(!this.state.firstName)
      {
           formIsValid = false
           errors['firstName']='*Please enter this field'
      }
      if(!this.state.lastName)
      {
           formIsValid = false
           errors['lastName']='*Please enter this field'
      }
      if(!this.state.email)
      {    
           formIsValid = false
           errors['email']='*Please enter this field'
      }
      else if(!/\S+@\S+\.\S+/.test(this.state.email))
      {
        formIsValid = false
        errors['email']='*Please enter valid email'
      }
      if(!this.state.mobile)
      {    
           formIsValid = false
           errors['mobile']='*Please enter this field'
      }
      if(!this.state.city)
      {    
           formIsValid = false
           errors['city']='*Please enter this field'
      }
      if(!this.state.password)
      {   
           formIsValid = false
           errors['password']='*Please enter this field'
       }
       this.setState({ errors })
       return formIsValid
}
    custRegistration = (creg)=>{
        creg.preventDefault();
        if(this.validation()){
        let payload = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            mobile:this.state.mobile,
            city:this.state.city,
            password:this.state.password
        }
        this.props.CustomerAction.registerCustomer(payload);
    }
}
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
            <div class="main">
            <Navbar/>
    <section class="signup">
      
        <div class="container">
            <div class="signup-content">
                <form method="POST" id="signup-form" class="signup-form">
                    <h2 class="form-title">Create account</h2>
                    
                    <div class="form-group">
                    <input type="text" name="firstName" class="form-input" value={this.state.firstName}  onChange={this.onChange} placeholder="First Name"></input>
                    <div class="red_color">{this.state.errors.firstName}</div><br></br>

                    </div>
                    <div class="form-group">
                    <input type="text" name="lastName" class="form-input" value={this.state.lastName}  onChange={this.onChange} placeholder="Last Name"></input>
                    <div class="red_color">{this.state.errors.lastName}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="text" name="email" class="form-input" value={this.state.email}  onChange={this.onChange} placeholder="Email"></input>
                    <div class="red_color">{this.state.errors.email}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="text" name="mobile" class="form-input" value={this.state.mobile}  onChange={this.onChange} placeholder="Mobile"></input>
                    <div class="red_color">{this.state.errors.mobile}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="text" name="city" class="form-input" value={this.state.city}  onChange={this.onChange} placeholder="City"></input>
                    <div class="red_color">{this.state.errors.city}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="password" name="password" class="form-input" value={this.state.password} onChange={this.onChange} placeholder="Password"></input>
                    <div class="red_color">{this.state.errors.password}</div><br></br>
                    </div>
                    
                    <div class="form-group">
                    <button className="form-submit" onClick={this.custRegistration}>Register</button>
                    </div>
                </form>
                <p class="loginhere">
                         Already have an account ? <a href="/customer" class="loginhere-link">Login here</a>
                    </p>
            </div>
        </div>
    </section>

</div>

        ); 
    }
}
function mapStateToProps(state){
    return{
        customerReg : state.CustomerReducer.customerReg
    };
}
function mapDispatchToProps(dispatch){
    return{
        CustomerAction:bindActionCreators(CustomerAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterCustomer);