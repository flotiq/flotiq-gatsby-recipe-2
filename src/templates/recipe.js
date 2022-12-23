import React from 'react';
import { graphql } from 'gatsby';
import { Header, List, Paragraph } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../layouts/layout';
import RecipeBackButton from '../components/recipe/RecipeBackButton';
import RecipeSteps from '../components/recipe/RecipeSteps';
import HeaderImageWithText from '../components/recipe/HeaderImageWithText';
import RecipeCards from '../sections/RecipeCards';

const RecipeTemplate = ({ data }) => {
    const { recipe } = data;
    const recipes = data.allRecipe.nodes;

    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>{recipe.name}</title>
                <meta
                    name="description"
                    content={recipe.description}
                />
            </Helmet>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <RecipeBackButton additionalClass={['mt-12 mb-5 uppercase']} backButtonText="Go back" />
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div
                    className="flex basis-full lg:basis-1/2"
                >
                    <GatsbyImage
                        image={getImage(recipe.image[0].localFile)}
                        alt={recipe.name}
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col basis-full lg:basis-1/2 pl-0 lg:pl-12 pt-5 pb-10 bg-white">
                    <div className="flex flex-wrap justify-start text-sm font-light space-x-5 py-5">
                        <p className="px-4 py-3 bg-light-gray">
                            Time:
                            {' '}
                            <span className="font-semibold">
                                {recipe.cookingTime}
                            </span>
                        </p>
                        <p className="px-4 py-3 bg-light-gray">
                            Portions:
                            {' '}
                            <span className="font-semibold">{recipe.servings}</span>
                        </p>
                    </div>
                    <Header additionalClasses={['text-xl md:text-5xl text-secondary !font-normal']}>
                        {recipe.name}
                    </Header>
                    <Paragraph>
                        {recipe.description}
                    </Paragraph>
                    <Header level={4} additionalClasses={['uppercase mt-16 mb-10']}>
                        Ingredients:
                    </Header>
                    <List
                        items={recipe.ingredients.map((ingredient) => (
                            { content: `${ingredient.amount} ${ingredient.unit} ${ingredient.product}` }
                        ))}
                    />
                </div>
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <RecipeSteps steps={recipe.steps} additionalClass={['my-5']} headerText="Steps:" />
            </div>
            <HeaderImageWithText
                recipe={recipe}
                headerText1="Enjoy"
                headerText2="your"
                headerText3="meal!"
            />
            <RecipeCards recipes={recipes} headerText="Next recipe to cook:" />
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
    recipe(slug: {eq: $slug}) {
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
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
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
        step
      }
    }
    allRecipe(
      sort: {flotiqInternal: {createdAt: DESC}}
      limit: 3
      filter: {slug: {ne: $slug}}
    ) {
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
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
      }
    }
  }
`;

export default RecipeTemplate;
