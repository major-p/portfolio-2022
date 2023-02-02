
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {
  LogoProjectListReducer,
  BrochureProjectlistReducer,
  EditorialProjectListReducer,
  UiProjectListReducer,

    projectDetailsReducer,
    projectCategoryListReducer,

  } 
    from './reducers/projectReducers';


  
import React, {useContext} from 'react'








const initialState = {
  

   
    

};

const reducer = combineReducers({
 LogoProjectList:LogoProjectListReducer,
 BrochureProjectlist: BrochureProjectlistReducer,
 EditorialProjectList: EditorialProjectListReducer,
 UiProjectList:UiProjectListReducer,

 projectDetails: projectDetailsReducer,
 projectCategoryList: projectCategoryListReducer,

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;