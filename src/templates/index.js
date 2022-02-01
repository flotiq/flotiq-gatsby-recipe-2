import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import RecipeFeaturedCard from '../components/RecipeFeaturedCard';
import RecipeImage from '../assets/recipe-image.jpg';

const IndexPage = ({ data }) => {
    const recipes = data.allRecipe.nodes;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>Flotiq Gatsby recipe starter</title>
            </Helmet>
            {recipes.map((recipe) => (
                <a href={`/${recipe.slug}`}><p key={recipe.id}>{recipe.name}</p></a>
            ))}
            <RecipeFeaturedCard
                title={(
                    <span className="block text-3xl md:text-5xl mb-4 mx-1 font-normal">
                        Cozy, Little
                        <span className="block text-secondary leading-relaxed"> Chilli Weekend </span>
                    </span>
                )}
                excerpt="Get some protein into a vegan diet with this tasty chickpea curry jacket.
                It's an easy midweek meal, or filling lunch that packs a lot of flavour."
                tags={['#dinner', '#vegan', '#lunch', '#glutenfree']}
                preparationTime="10 min"
                portions="2"
                image={RecipeImage}
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
