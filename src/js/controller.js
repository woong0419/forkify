import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //loading recipe

    await model.loadRecipe(id);

    //rendering recipe
    recipeView.render(model.state.recipe);
    // console.log('controller', model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe)
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
