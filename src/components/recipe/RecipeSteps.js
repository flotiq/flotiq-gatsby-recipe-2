import React from 'react';
import { Header, Paragraph } from 'flotiq-components-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const RecipeSteps = ({ additionalClass, steps, headerText }) => (
    <div className={['flex flex-wrap max-w-7xl mx-auto '
    + 'bg-white py-5', ...additionalClass].join(' ')}
    >
        <Header level={4} additionalClasses={['uppercase font-normal px-5 pb-5 md:px-10']}>
            {headerText}
        </Header>
        {steps.map((step, index) => (
            <div className="w-full" key={step.step}>
                <Paragraph additionalClasses={['px-5 md:px-10 pb-5 md:px-14']}>
                    {`${index + 1}. ${step.step}`}
                </Paragraph>
                {step.image && step.image[0]
                  && (
                      <GatsbyImage
                          image={getImage(step.image[0].localFile)}
                          alt={step.step}
                          className="w-full pb-5 md:pb-10"
                      />
                  )}
            </div>
        ))}
    </div>
);

export default RecipeSteps;
