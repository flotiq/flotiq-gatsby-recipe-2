import React from 'react';
import { Card } from 'flotiq-components-react';

const CustomRecipeFeaturedCard = ({ preparationTime, portions, title, excerpt, tags, image, onClick }) => (
    <Card
        vertical
        onClick={onClick}
        bordered={false}
        rounded="none"
        additionalClasses={['mb-4 cursor-pointer max-w-7xl mx-auto ']}
        proportionsForVertical={{
            body: '2/5',
            img: '3/5',
            breakpoint: 'lg',
        }}
    >
        <Card.Body
            additionalClasses={[
                'flex flex-col items-start justify-between '
                + 'order-2 lg:order-1 px-5 md:px-10 pt-10 pb-5',
            ]}
        >
            <div className="flex flex-wrap justify-between text-sm font-light space-x-5 mb-14">
                <p className="px-4 py-3 bg-light-gray">
                    Time:
                    {' '}
                    <span className="font-semibold">{preparationTime}</span>
                </p>
                <p className="px-4 py-3 bg-light-gray">
                    Portions:
                    {' '}
                    <span className="font-semibold">{portions}</span>
                </p>
            </div>
            <div>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text additionalClasses={['line-clamp-5 lg:line-clamp-4 xl:line-clamp-5']}>
                    {excerpt}
                </Card.Text>
            </div>
            <div className="w-full">
                <div className="flex flex-wrap justify-start text-sm font-light mt-5">
                    {tags && tags.map((tag) => (
                        <a
                            href="/"
                            className="mr-7 my-1 py-2 inline-flex items-center justify-center
                    rounded-md underline text-sm font-light hover:text-secondary"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </Card.Body>
        <div
            style={{ backgroundImage: `url('${image}')` }}
            className="w-full lg:w-auto order-1 lg:order-2 lg:basis-3/5 bg-cover bg-center"
        >
            <Card.Img src={image} alt={title} additionalClasses={['block lg:hidden w-full']} />
        </div>

    </Card>
);

export default CustomRecipeFeaturedCard;
