const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const singleRecipe = path.resolve('./src/templates/recipe.js');
    const result = await graphql(`
    query GetRecipes {
        allRecipe(sort: {flotiqInternal: {createdAt: DESC}}) {
          edges {
            node {
              slug
            }
          }
        }
      }
`);

    if (result.errors) {
        throw result.errors;
    }
    const recipes = result.data.allRecipe.edges;

    // Create paginated index
    const recipesPerPage = 7;
    const numPages = Math.ceil(recipes.length / recipesPerPage);

    Array.from({ length: numPages }).forEach((item, i) => {
        createPage({
            path: i === 0 ? '/' : `/${i + 1}`,
            component: path.resolve('./src/templates/index.js'),
            context: {
                limit: recipesPerPage,
                skip: i * recipesPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });

    // Create recipes pages.
    recipes.forEach((recipe, index) => {
        const previous = index === recipes.length - 1 ? null : recipes[index + 1].node;
        const next = index === 0 ? null : recipes[index - 1].node;

        createPage({
            path: recipe.node.slug,
            component: singleRecipe,
            context: {
                slug: recipe.node.slug,
                previous,
                next,
            },
        });
    });
};
