import React from 'react';

const Announcement = ({ additionalClass, message }) => (
    <div className={['max-w-3xl flex items-center '
  + 'justify-center mx-auto px-2 sm:px-6 lg:px-8 ', ...additionalClass].join(' ')}
    >
        <h1>{message}</h1>
    </div>
);

export default Announcement;
