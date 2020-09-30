# Example mutations

    mutation findByIngredients{
        findByIngredients(args: {ingredients: "apples;flour", number: 1}) { // ingredients must be trimmed and separated with semicolons
            response
        }
    }
