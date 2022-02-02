import React from 'react';
import { Image, Header, Paragraph } from 'flotiq-components-react';

const RecipeSteps = ({ additionalClass, steps, headerText }) => (
    <div className={['flex flex-wrap max-w-7xl mx-auto '
    + 'bg-white py-5', ...additionalClass].join(' ')}
    >
        <Header level={4} text={headerText} additionalClasses={['uppercase font-normal px-5 pb-5 md:px-10']} />
        {steps.map((step, index) => (
            <div className="w-full">
                <Paragraph text={`${index + 1}. ${step.step}`} additionalClasses={['px-5 md:px-10 pb-5 md:px-14']} />
                {step.image && step.image[0]
                  && <Image url={step.image[0].localFile.publicURL} additionalClasses={['pb-5 md:pb-10']} />}
            </div>
        ))}
    </div>
);

export default RecipeSteps;
