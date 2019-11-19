import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 

import { fetchSuggestRecipe } from '../action';


class RecipeSuggester extends React.Component {

    onFetchRecipeClicked = () => {
        this.props.fetchSuggestRecipe();
    }

    componentDidMount() {
       this.props.fetchSuggestRecipe();
    }

    render() {

        if (this.props.suggestRecipe === undefined) {
            return (<div>Loading</div>);
        }

        return (
            <div>
                <div>{this.props.suggestRecipe.title}</div>
                <div>{this.props.suggestRecipe.image}</div>
                <div>{this.props.suggestRecipe.servings} serving</div>
                <div>{this.props.suggestRecipe.readyInMinutes} minutes</div>
                <Link onClick={this.onFetchRecipeClicked}>Next Recipe</Link>
                <Link to={`/recipe/${this.props.suggestRecipe.id}`}>Detail</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    suggestRecipe: state.suggestRecipe
});

export default connect(mapStateToProps, { fetchSuggestRecipe })(RecipeSuggester);