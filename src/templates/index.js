import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Pagination } from 'flotiq-components-react';
import Layout from '../layouts/layout';

const IndexPage = ({ data }) => {
    const recipes = data.allRecipe.nodes;
    return (
        <Layout>
            <Helmet>
                <title>Flotiq Gatsby recipe starter</title>
            </Helmet>
            {recipes.map((recipe) => (
                <a href={`/${recipe.slug}`}><p key={recipe.id}>{recipe.name}</p></a>
            ))}
            <Pagination
                page={1}
                numOfPages={10}
                borderVariant="transparent"
                next="ᐳ"
                prev="ᐸ"
                rounded="none"
                variant="transparent"
                additionalClasses={['font-light']}
                prevNextAdditionalClasses={['!bg-primary px-3 md:px-4 !w-auto !text-white']}
                activeAdditionalClasses={['!font-semibold before:block before:absolute '
                + 'before:w-2 before:h-2 before:-bottom-2 before:bg-primary']}
            />
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
