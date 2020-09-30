import bodyParser from "body-parser";
import express from "express";
import fetch from "node-fetch";
import { env } from "./env";

const app = express();
app.use(bodyParser.json());

app.post("/findByIngredients", async (req, res) => {
  const {
    args: { ingredients, number },
  } = req.body.input;

  try {
    const recipes = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients
        .split(";")
        .join("+")}&number=${number}&apiKey=${env.SPOONACULAR_API_KEY}`,
      { headers: { "Content-Type": "application/json" } }
    );
    if (recipes && recipes.statusText === "OK") {
      const recipesJson = await recipes.json();
      return res.json({
        response: JSON.stringify({ data: recipesJson }),
      });
    } else {
      return res.json({
        response: JSON.stringify({
          errors: [{ message: "error-returned-from-server", e: recipes }],
        }),
      });
    }
  } catch (e) {
    return res.json({
      errors: [{ message: "error-catched", e }],
    });
  }
});

app.listen(env.PORT);
