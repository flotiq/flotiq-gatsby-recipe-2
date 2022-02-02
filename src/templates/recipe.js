import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import RecipeSteps from '../components/recipe/RecipeSteps';

const RecipeTemplate = ({ data }) => {
    const { recipe } = data;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <RecipeSteps steps={recipe.steps} additionalClass={['my-5']} />
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
                    localFile {
                        publicURL
                    }
                }
                step
            }
        }
        allRecipe(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: 4,) {
            nodes {
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
            }
        }
    }
`;

export default RecipeTemplate;
