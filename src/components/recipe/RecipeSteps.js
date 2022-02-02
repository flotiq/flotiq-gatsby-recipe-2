import React from 'react';
import { Image } from 'flotiq-components-react';

const RecipeSteps = ({ additionalClass, steps }) => (
    <div className={['flex flex-wrap max-w-7xl mx-auto '
    + 'px-2 sm:px-6 lg:px-8 bg-white', ...additionalClass].join(' ')}
    >
        {steps.map((step) => (
            <div>
                <p>{step.step}</p>
                {step.image && step.image[0]
                  && <Image url={step.image[0].localFile.publicURL} />}
            </div>
        ))}
    </div>
);

export default RecipeSteps;
