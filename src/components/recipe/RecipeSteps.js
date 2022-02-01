import React from 'react';

const RecipeSteps = ({ additionalClass, steps }) => (
    <div className={['flex flex-wrap max-w-7xl mx-auto '
    + 'px-2 sm:px-6 lg:px-8 bg-white', ...additionalClass].join(' ')}
    >
        {steps.map((step) => (
            <p>{step}</p>
        ))}
    </div>
);

export default RecipeSteps;
