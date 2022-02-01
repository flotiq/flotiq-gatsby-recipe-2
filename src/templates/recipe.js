import React from 'react';
import { graphql } from 'gatsby';
import { Image } from 'flotiq-components-react';
import Layout from '../layouts/layout';

const RecipeTemplate = ({ data }) => {
    const { recipe } = data;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-white">
                <div className="flex basis-full md:basis-1/2">
                    <Image url={recipe.image[0] && recipe.image[0].localFile.publicURL} />
                </div>
                <div className="flex flex-col basis-full md:basis-1/2 pl-0 md:pl-12 py-5">
                    <div>Recipe description</div>
                </div>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query PortfolioProjectBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        recipe( slug: { eq: $slug } ) {
            id
            cookingTime
            description
            name
            slug
            servings
            image {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            ingredients {
                amount
                unit
                product
            }
            steps {
                image {
                    extension
                    id
                }
            }
        }
    }
`;

export default RecipeTemplate;
