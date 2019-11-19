import React from 'react';
import { connect } from 'react-redux';

import { fetchRecipeDetailById } from '../action';

class RecipeDetails extends React.Component {

    componentDidMount() {
        if (this.props.id !== undefined) {
            this.props.fetchRecipeDetailById(this.props.id);
        }
    }

    render() {
        console.log(this.props);
        return (<div>Recipe</div>);
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id
});

export default connect(mapStateToProps, { fetchRecipeDetailById })(RecipeDetails);