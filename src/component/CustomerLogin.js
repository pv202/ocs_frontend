import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CustomerAction from '../store/actions/CustomerAction';
import HomeNavBar from './HomeNavBar';

class CustomerLogin extends Component {
  constructor(props){
  super(props)
  this.state={
         email:'',
         password:'',
         errors:{}
         }
  }
  addValidate = () => {
       let errors = {}
       let formIsValid = true
       if(!this.state.email)
      {
        formIsValid = false
        errors['email'] = '*Please enter this field'
      }
      if(!this.state.password)
      {
        formIsValid = false
        errors['password'] = '*Please enter this field'
      }
      this.setState({ errors })
      return formIsValid
  }
      validation=(usr)=>{
      usr.preventDefault();
      if(this.addValidate()){
      let payload={
         email:this.state.email,
         password:this.state.password
      }
        this.props.CustomerAction.loginValidate(payload);
        usr.preventDefault();
    }
  }
  onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
  render(){
      let login=this.props.custlogin;
      console.log("inside render method"+login);
      if(login!==undefined){
        debugger;
        sessionStorage.setItem('customerId',login.customerId);
        sessionStorage.setItem('password',login.password);
        sessionStorage.setItem('firstName',login.firstName);
        sessionStorage.setItem('lastName',login.lastName);
        sessionStorage.setItem('email',login.email);
        window.location.href="/Customerhome";
      }
  return(
    <div class="main">
    <HomeNavBar/>
<section class="signup">

<div class="container">
    <div >
        <form method="POST" id="signup-form" class="signup-form">
            <h2 class="form-title">Login</h2>
            
            <div class="form-group">
            <input type="text" name="email"  class="form-input" placeholder="Email" value={this.state.email} onChange={this.onChange}></input>
            <div class="red_color">{this.state.errors.email}</div><br></br>
            </div>
            <div class="form-group">
            <input type="password" name="password"  class="form-input" placeholder="Password" value={this.state.password} onChange={this.onChange}></input><br></br>
           <div class="red_color">{this.state.errors.password}</div><br></br>
                <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
            </div>
            
            
            <div class="form-group">
            <button  onClick={this.validation}>Login</button>
            </div>
        </form>
        <p class="loginhere">
            Do not have an account ? <a href="/addCust" class="loginhere-link">Register here</a>
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
    custlogin: state.CustomerReducer.custlogin
    };
  }
  function mapDispatchToProps(dispatch){
  return{
  CustomerAction: bindActionCreators(CustomerAction,dispatch)
     };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(CustomerLogin);