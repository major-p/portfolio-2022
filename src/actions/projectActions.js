
import axios from "axios";
import Axios from 'axios';

import {
   
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,

  LOGO_PROJECT_LIST_FAIL, 
  LOGO_PROJECT_LIST_REQUEST,
  LOGO_PROJECT_LIST_SUCCESS,

  BROCHURE_PROJECT_LIST_FAIL, 
  BROCHURE_PROJECT_LIST_REQUEST,
  BROCHURE_PROJECT_LIST_SUCCESS,

  EDITORIAL_PROJECT_LIST_FAIL, 
  EDITORIAL_PROJECT_LIST_REQUEST,
  EDITORIAL_PROJECT_LIST_SUCCESS,

  UI_PROJECT_LIST_FAIL, 
  UI_PROJECT_LIST_REQUEST,
  UI_PROJECT_LIST_SUCCESS,


     
     } from "../constants/projectConstants";

  
  export const listLogoProjects = () => async (dispatch) => {
    try {
      dispatch({ type: LOGO_PROJECT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/sambplus/restapi/logos.php`);
      dispatch({ type: LOGO_PROJECT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOGO_PROJECT_LIST_FAIL, payload: error.message });
    }
  };

  export const listBrochureProjects = () => async (dispatch) => {
    try {
      dispatch({ type: BROCHURE_PROJECT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/sambplus/restapi/brochure.php`);
      dispatch({ type: BROCHURE_PROJECT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: BROCHURE_PROJECT_LIST_FAIL, payload: error.message });
    }
  };

  export const listEditorialProjects = () => async (dispatch) => {
    try {
      dispatch({ type: EDITORIAL_PROJECT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/sambplus/restapi/editorial.php`);
      dispatch({ type: EDITORIAL_PROJECT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: EDITORIAL_PROJECT_LIST_FAIL, payload: error.message });
    }
  };

  export const listUiProjects = () => async (dispatch) => {
    try {
      dispatch({ type: UI_PROJECT_LIST_REQUEST });
      const { data } = await axios.get(`http://localhost/sambplus/restapi/uiux.php`);
      dispatch({ type: UI_PROJECT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UI_PROJECT_LIST_FAIL, payload: error.message });
    }
  };
  
 
 export const detailsProject = (projectId) => async (dispatch) => {
    try {
      dispatch({ type: PROJECT_DETAILS_REQUEST});
      const { data } = await  axios.get(`http://localhost/sambplus/restapi/projects.php?id=${projectId}`);
      dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PROJECT_DETAILS_FAIL, payload: error.message });
    }
  };

 


