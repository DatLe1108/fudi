import React from 'react';
import recipeApi from '../api/recipeApi';

class App extends React.Component {

    componentDidMount() {
        const result = recipeApi.get('/recipes/search',
            {
                params: {
                    query: 'tomato',
                    cuisine: 'vietnam'
                }
            }
        ).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (<div>App</div>);
    }

}

export default App;