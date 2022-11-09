import React from 'react';
import { Header } from 'flotiq-components-react';
import RecipeCard from '../components/RecipeCard';

const RecipeCards = ({ recipes, headerText }) => (
    <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
        <Header additionalClasses={['basis-1 mb-10 !text-5xl !font-medium']}>
            {headerText}
        </Header>
        <div className="flex flex-wrap justify-start">
            {recipes.map((recipe) => (
                <RecipeCard
                    cookingTime={recipe.cookingTime}
                    servings={recipe.servings}
                    key={recipe.id}
                    image={recipe.image[0]?.localFile}
                    name={recipe.name}
                    slug={recipe.slug}
                    tags={[]}
                />
            ))}
        </div>
    </div>
);

export default RecipeCards;
