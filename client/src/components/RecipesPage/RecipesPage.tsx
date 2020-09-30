import React, { useState } from "react";
import ReactTags from "react-tag-autocomplete";
import { useFindByIngredientsMutation } from "../../generated/graphql";
import { commonIngredients } from "../../utils/constants";
import Layout from "../Layout/Layout";
import styles from "./RecipesPage.module.css";

interface Ingredient {
  id: number;
  name: string;
}

const RecipesPage = () => {
  const [findByIngredientsMutation] = useFindByIngredientsMutation();

  const [ingredients, setIngredients] = useState([{ id: 1, name: "Apple" }]);
  const [recipes, setRecipes] = useState([]);
  const [moreIngredients, setMoreIngredients] = useState(commonIngredients);

  const onDelete = (i: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(i, 1);
    setIngredients(newIngredients);
  };

  const onAddition = (item: Ingredient) => {
    const newIngredients = [...ingredients];
    newIngredients.push({
      id: newIngredients.length + 1,
      name: item.name.trim(),
    });
    setIngredients(newIngredients);
  };

  const onAddMore = (i: any) => {
    const newMoreIngredients = [...moreIngredients];
    const deleted = newMoreIngredients.splice(i, 1);
    setMoreIngredients(newMoreIngredients);
    onAddition(deleted[0]);
  };

  const onHandleSearch = async () => {
    try {
      const recipes = await findByIngredientsMutation({
        variables: {
          ingredients: ingredients.map((item) => item.name).join(";"),
          number: 12,
        },
      });
      if (recipes.data?.findByIngredients) {
        const recipesParsed = JSON.parse(
          recipes.data.findByIngredients.response
        );

        if (recipesParsed.errors) {
          console.log(recipesParsed.errors);
        }

        setRecipes(recipesParsed.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <div className="container">
        <ReactTags
          allowNew={true}
          autoresize={false}
          classNames={{
            root: "input-group input-group-md border-bottom rounded w-100",
            rootFocused: "",
            selected: "input-group-prepend border-right",
            selectedTag: "btn btn-light bg-white",
            selectedTagName: `${styles.selectedTagName} text-secondary`,
            search: "form-control border-0 ml-1",
            searchInput: `w-100 border-0 ${styles.outlineNone}`,
            suggestions: "",
            suggestionActive: "",
            suggestionDisabled: "",
          }}
          // @ts-ignore
          placeholderText="Add more ingredients..."
          tags={ingredients}
          onDelete={onDelete}
          onAddition={onAddition}
        />
        <button
          type="button"
          className={`btn btn-outline-light border-top-0 border-bottom btn-md btn-block rounded-0 text-secondary ${styles.buttonSearch}`}
          onClick={onHandleSearch}
        >
          Search for recipes...
        </button>
      </div>

      <div className="container mt-5 ">
        <div className="text-muted mb-2">Add more search parameters...</div>{" "}
        {moreIngredients.map((item, index) => (
          <button
            key={index}
            onClick={(item) => onAddMore(item)}
            type="button"
            className="btn btn-light bg-white border"
          >
            {item.name} +
          </button>
        ))}
      </div>

      <div className="album py-5">
        <div className="container">
          <div className="row">
            {recipes.map((recipe: any) => (
              <div className="col-md-4" key={recipe.id}>
                <div className="card mb-4 box-shadow">
                  <img
                    className="card-img-top"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <div className="card-body">
                    <p className="card-text">{recipe.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipesPage;
