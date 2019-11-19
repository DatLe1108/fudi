import React from 'react';
import recipeApi from '../api/recipeApi';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RecipeSuggester from './RecipeSuggester';
import RecipeDetail from './RecipeDetail';

class App extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={RecipeSuggester} />
                    <Route path="/recipe/:id" exact component={RecipeDetail} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;