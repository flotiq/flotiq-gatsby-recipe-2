import React from 'react';
import { Link } from 'gatsby';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const RecipeBackButton = ({ additionalClass, backButtonText }) => (
    <Link
        to="/"
        className={['flex items-center font-sora font-semibold text-sm md:text-base', ...additionalClass].join(' ')}
    >
        <ArrowLeftIcon className="mr-3 h-5 w-5 text-primary" />
        {backButtonText}
    </Link>
);

export default RecipeBackButton;
