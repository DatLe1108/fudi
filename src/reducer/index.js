import { combineReducers } from 'redux';
import suggestorRecipeReducer from './SuggestorRecipeReducer';

export default combineReducers({
    suggestRecipe: suggestorRecipeReducer
});