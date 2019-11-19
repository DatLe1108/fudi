import recipeApi from '../api/recipeApi';

export const fetchSuggestRecipe = () => async dispatch => {

    const { data: {recipes : [recipe]}} = await recipeApi.get('/recipes/random', 
    {
        params: {
            number: 1
            }
        }
    );

    const {title, image, servings, readyInMinutes, id} = recipe;

    dispatch({
        type: 'FETCH_RECIPE',
        payload: {
             title, image, servings, readyInMinutes, id
        }
    })
}

export const fetchRecipeDetailById = id => async dispatch => {

    const respone = await recipeApi.get(`/recipes/${id}/information`, {
        params: {
            includeNutrition: false  
        }
    })
    console.log(respone.data);
}