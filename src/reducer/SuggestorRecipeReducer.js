const INTIAL_STATE = {
    id: null,
    title: null, 
    image: null,
    servings: null, 
    readyInMinutes: null
};

const suggestorRecipeReducer = (state = INTIAL_STATE, action = {}) => {

    if (action.type === 'FETCH_RECIPE') {
        console.log(action.payload);
        const { id, title, image, servings, readyInMinutes } = action.payload;
        return { ...state, id, title, image, servings, readyInMinutes }
    }

    return state;
}

export default suggestorRecipeReducer;