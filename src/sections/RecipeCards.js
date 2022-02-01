import React from 'react';
import { navigate } from 'gatsby';
import RecipeCard from '../components/RecipeCard';

const RecipeCards = ({ recipes }) => (
    <div className="flex flex-wrap justify-start max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8">
        {recipes.map((recipe) => (
            <RecipeCard
                cookingTime={recipe.cookingTime}
                servings={recipe.servings}
                key={recipe.id}
                onClick={() => { navigate(`/${recipe.slug}`); }}
                image={recipe.image[0] && recipe.image[0].localFile.publicURL}
                name={recipe.name}
                tags={['#dinner', '#vegan', '#lunch', '#glutenfree']}
            />
        ))}
    </div>
);

export default RecipeCards;
