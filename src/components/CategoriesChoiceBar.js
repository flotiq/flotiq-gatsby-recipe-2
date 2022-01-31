import React from 'react';

const CategoriesChoiceBar = ({ additionalClass }) => (
    <div className={['max-w-3xl flex items-center '
  + 'justify-center mx-auto px-2 sm:px-6 lg:px-8 ', ...additionalClass].join(' ')}
    >
        <h1>Bar</h1>
    </div>
);

export default CategoriesChoiceBar;
