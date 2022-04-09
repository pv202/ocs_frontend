import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
class CustomerHomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return(
            <div class="App">
				<Navbar/>
		<h5><u>WELCOME {sessionStorage.getItem('firstName')}</u></h5>
		<div class="row">
			<div class="col-sm-4">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			        <i class="fa fa-eye fa-lg" aria-hidden="true"></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">Add Chat </h5>
			            <p class="card-text"></p>
			            <Link to='/addChat'>
              <button className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			  <div class="col-sm-4">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			       <i class="fa fa-search fa-lg" aria-hidden="true" ></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">Change Password </h5>
			            <p class="card-text"></p>
			            <Link to='/custchangepassword'>
              <button className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			<div class="col-sm-4">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			        <i class="fa fa-search fa-lg" aria-hidden="true"></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">View Issues </h5>
			            <p class="card-text"></p>
			            <Link to='/viewallcustissue'>
              <button className="btn btn-success" ><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			</div>
		</div>
        ); 
    }
}
function mapStateToProps(state){
    return{
      custlogin: state.CustomerReducer.custlogin
      };
    }
   
    export default connect(mapStateToProps)(CustomerHomePage);