import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import CategoriesChoiceBar from '../components/CategoriesChoiceBar';

const IndexPage = ({ data }) => {
    const recipes = data.allRecipe.nodes;
    return (
        <Layout>
            <Helmet>
                <title>Flotiq Gatsby recipe starter</title>
            </Helmet>
            <CategoriesChoiceBar additionalClass={['my-5']} />
            {recipes.map((recipe) => (
                <a href={`/${recipe.slug}`}><p key={recipe.id}>{recipe.name}</p></a>
            ))}
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allRecipe(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
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
    }
`;

export default IndexPage;
