import React from 'react';
import { navigate } from 'gatsby';
import { Header } from 'flotiq-components-react';
import RecipeCard from '../components/RecipeCard';

const RecipeCards = ({ recipes, headerText }) => (
    <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
        <Header additionalClasses={['basis-1 mb-10 !text-5xl !font-medium']} text={headerText} />
        <div className="flex flex-wrap justify-start">
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
    </div>
);

export default RecipeCards;
