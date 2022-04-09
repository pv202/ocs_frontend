const initialState={
    custlogin:undefined,
    customerReg: undefined,
    sol:[],
    editpass:undefined,
    issue:[],
    open:undefined,
}
export default function CustomerReducer(state=initialState,action){
    switch(action.type){
        case 'CUSTOMER_LOGIN_SUCCESS':
            return{
                ...state,
                custlogin : action.custlogin
            
            };
            case 'CUST_REGN_SUCCESS':
                return{
                    ...state,
                    customerReg : action.customerReg
                };
                
                    case 'GET_SOLUTIONALL_SUCCESS':
                        return{
                            ...state,
                            sol:action.sol
                        };  
                    case 'CUST_PASSWORD_EDITED':
                            return{
                                ...state,
                                editpass:'edited'
                            };
                     case 'GET_ALL_ISSUE_SUCCESS':
                             return{
                                 ...state,
                                 issue:action.issue
                                }; 
                    case 'ISSUE_OPENED' :
                        return{
                            ...state,
                            open:'opened'
                        };
            default:
                return state
        }
    };