import React from 'react';

const RecipeFeaturedCard = ({ preparationTime, portions, title, tags, image }) => (
    <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap align-start bg-white
                overflow-hidden mb-4 cursor-pointer"
    >
        <div className="flex flex-col items-start justify-between basis-full lg:basis-2/5
        order-2 lg:order-1 px-5 md:px-10 pt-10 pb-5"
        >
            <div className="flex flex-wrap justify-between text-sm font-light mt-5">
                <p className="mr-5">
                    Time:
                    {' '}
                    {preparationTime}
                </p>
                <p>
                    Portions:
                    {' '}
                    {portions}
                </p>
            </div>
            <div>
                <h1 className="text-3xl font-semibold leading-10">
                    {title}
                </h1>
                <p className="text-base font-light my-5">
                    excerpt
                </p>
            </div>
            <div className="w-full">
                <div className="flex flex-wrap justify-start text-sm font-light mt-5 space-x-7">
                    {tags && tags.map((tag) => (
                        <a
                            href="/"
                            className="mx-1 my-1 py-2 inline-flex items-center justify-center
                        rounded-md underline text-sm font-light hover:text-secondary"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <div
            className="basis-full lg:basis-3/5 order-1 lg:order-2 bg-no-repeat bg-cover bg-center bg-secondary"
            style={{ backgroundImage: `url('${image}')` }}
        >
            {image && (
                <img
                    className="block lg:hidden w-full"
                    src={image}
                    alt={title}
                />
            )}
        </div>
    </div>
);

export default RecipeFeaturedCard;
