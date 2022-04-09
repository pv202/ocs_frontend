import axios from 'axios';
const CUSTLOGINURL="http://localhost:8060/customer";

export const loginSuccess=(custlogin)=>{
  console.log("inside login success");
  console.log(custlogin);
  return{
        type:'CUSTOMER_LOGIN_SUCCESS',custlogin
}
};
export const loginValidate=(payload) =>{
console.log("inside loginvalidate method");
let data={
  email:payload.email,
  password:payload.password
}
return(dispatch)=>{ 
    return axios.post(CUSTLOGINURL+"/login",data)
    .then(Response =>{
        localStorage.setItem("custlogin",JSON.stringify(Response.data));
        console.log("api call");
        dispatch(loginSuccess(Response.data));
    })
    .catch(Error=>{
        alert("Invalid credentials");
        throw(Error);
    });
};
};
export const registrationSucess=()=>{
  console.log("inside registrationSucess method");
  alert("User registered successfully");
  window.location.href="/";
  return{
      type:'CUST_REGN_SUCCESS'
  }
};
export const registerCustomer=(payload)=>{
  console.log("inside register user method");
  let data={
      firstName :payload.firstName,
      lastName : payload.lastName,
      email : payload.email,
      mobile:payload.mobile,
      city:payload.city,
      password:payload.password
  }
  return(dispatch)=>{
      return axios.post("http://localhost:8060/customer/addCustomer",data)
      .then(Response =>{
          //localStorage.setItem("register",JSON.stringify(Response.data));
          console.log("api call");
          dispatch(registrationSucess());
      })
      .catch(Error=>{
          console.log("error");
          throw(Error);
      });
  };

};



export const getSolutionSuccess = (sol) => {
    console.log("inside getissueByCodeSuccess method");
    return {
        type : 'GET_SOLUTIONALL_SUCCESS',sol
    }
};
export const getSolutionByIssueId=(code)=>{
    console.log("Inside getSolutions");
    return(dispatch)=>{
        return axios.get("http://localhost:8060/customer/Solutionsbyissueid/"+code)
        .then(Response=>{
            localStorage.setItem("sol",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getSolutionSuccess(Response.data));
        })
        .catch(Error=>{
            alert("solution for this issue is not found");
            window.location.href="/viewallcustissue";
            throw(Error);
        });
    };
};
export const editSuccess=()=>{
    console.log("inside edit Success method");
    alert("password updated");
    return {
        type : 'CUST_PASSWORD_EDITED'
    }
};

export const customerchangepassword = (payload) =>{
    console.log("inside change password method");
    let data = {
        customerId : payload.customerId,
        password : payload.password
    }
    return (dispatch)=> {
        return axios.put(CUSTLOGINURL+"/ChangePassword",data)
        .then(Response => {
            console.log("api call");
            dispatch(editSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const getAllIssueSuccess = (issue) => {
    console.log("inside getissueByCodeSuccess method");
    return {
        type : 'GET_ALL_ISSUE_SUCCESS',issue
    }
};
export const getAllIssues=(id)=>{
    console.log("Inside getIssues");
    return(dispatch)=>{
        return axios.get("http://localhost:8060/customer/viewAllIssue/"+id)
        .then(Response=>{
            localStorage.setItem("issue",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getAllIssueSuccess(Response.data));
        })
    };
};
export const reopenIssueSuccess=()=>{
    console.log("inside re open Success method");
    return {
        type : 'ISSUE_OPENED'
    }
};

export const reopenissue = (code) =>{
    console.log("inside reopen issues method");
    return (dispatch)=> {
        return axios.put(CUSTLOGINURL+"/reopenissue/"+code)
        .then(Response => {
            console.log("api call");
            dispatch(reopenIssueSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};