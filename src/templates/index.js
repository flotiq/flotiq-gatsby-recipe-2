import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Announcement, Pagination } from 'flotiq-components-react';
import Layout from '../layouts/layout';
// import CategoriesChoiceBar from '../components/CategoriesChoiceBar';
import RecipeCards from '../sections/RecipeCards';
import RecipeFeaturedCard from '../components/RecipeFeaturedCard';

const IndexPage = ({ data, pageContext }) => {
    const recipes = data.allRecipe.nodes;
    // const featuredRecipe = data.recipe;
    // const recipess = data.featuredRecipe.nodes;
    // const categoryTabs = [
    //     { name: 'Breakfast', href: '#', current: true },
    //     { name: 'Dinner', href: '#', current: false },
    //     { name: 'Dessert', href: '#', current: false },
    //     { name: 'Lunch', href: '#', current: false },
    //     { name: 'Snack', href: '#', current: false },
    //     { name: 'Vegan', href: '#', current: false },
    // ];
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={data.site.siteMetadata.description}
                />
            </Helmet>
            <Announcement
                content={(
                    <span className="leading-normal">
                        A blog full of
                        {' '}
                        <span className="text-secondary font-medium">easy to make recipes</span>
                        <br />
                        {' '}
                        that take the stress out of cooking.
                    </span>
                )}
                rounded="none"
                textAlignment="center"
                variant="transparent"
                additionalClasses={['max-w-3xl mx-auto mt-10 !text-3xl md:!text-4xl !font-light !px-4']}
            />
            {/* Uncomment this to add categories to your recipes */}
            {/* <CategoriesChoiceBar additionalClass={['my-5']} categoryTabs={categoryTabs} /> */}
            <RecipeFeaturedCard
                title={recipes[0].name}
                excerpt={recipes[0].description}
                tags={[]}
                preparationTime={recipes[0].cookingTime}
                portions={recipes[0].servings}
                image={recipes[0].image[0]?.localFile}
                imageAlt={recipes[0].name}
                slug={recipes[0].slug}
            />
            <RecipeCards recipes={recipes} headerText="Newest recipes" />
            <Pagination
                page={pageContext.currentPage}
                numOfPages={pageContext.numPages}
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
        description
      }
    }
    allRecipe(sort: {flotiqInternal: {createdAt: DESC}}, limit: $limit, skip: $skip) {
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
    file(name: {eq: "recipe-image"}) {
      childImageSharp {
        gatsbyImageData(height: 375, layout: CONSTRAINED)
      }
    }
  }
`;

export default IndexPage;
