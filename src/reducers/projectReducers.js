import { 
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,

  PROJECT_CATEGORY_LIST_REQUEST,
  PROJECT_CATEGORY_LIST_SUCCESS,
  PROJECT_CATEGORY_LIST_FAIL,

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
  
       
    function projectDetailsReducer(state = { project: { reviews: [] } }, action) {
      switch (action.type) {
        case PROJECT_DETAILS_REQUEST:
          return { loading: true };
        case PROJECT_DETAILS_SUCCESS:
          return { loading: false, project: action.payload };
        case PROJECT_DETAILS_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    }
  
  export const projectCategoryListReducer = (
    state = { loading: true, projects: [] },
    action
  ) => {
    switch (action.type) {
      case PROJECT_CATEGORY_LIST_REQUEST:
        return { loading: true };
      case PROJECT_CATEGORY_LIST_SUCCESS:
        return { loading: false, categories: action.payload };
      case PROJECT_CATEGORY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  


function LogoProjectListReducer(state = { logoprojects: [] }, action) {
  switch (action.type) {
    case LOGO_PROJECT_LIST_REQUEST:
      return { loading: true, logoprojects: [] };
    case LOGO_PROJECT_LIST_SUCCESS:
      return { loading: false, logoprojects: action.payload };
    case LOGO_PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
  

function BrochureProjectlistReducer(state = { bprojects: [] }, action) {
  switch (action.type) {
    case BROCHURE_PROJECT_LIST_REQUEST:
      return { loading: true, bprojects: [] };
    case BROCHURE_PROJECT_LIST_SUCCESS:
      return { loading: false, bprojects: action.payload };
    case BROCHURE_PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
  

function EditorialProjectListReducer(state = { eprojects: [] }, action) {
  switch (action.type) {
    case EDITORIAL_PROJECT_LIST_REQUEST:
      return { loading: true, eprojects: [] };
    case EDITORIAL_PROJECT_LIST_SUCCESS:
      return { loading: false, eprojects: action.payload };
    case EDITORIAL_PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
  

function UiProjectListReducer(state = { uprojects: [] }, action) {
  switch (action.type) {
    case UI_PROJECT_LIST_REQUEST:
      return { loading: true, uprojects: [] };
    case UI_PROJECT_LIST_SUCCESS:
      return { loading: false, uprojects: action.payload };
    case UI_PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
  
  export  {
    LogoProjectListReducer,
    BrochureProjectlistReducer,
    EditorialProjectListReducer,
    UiProjectListReducer,
    projectDetailsReducer,     
  
  }
  