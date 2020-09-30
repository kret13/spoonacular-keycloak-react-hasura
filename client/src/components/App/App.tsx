import { ApolloProvider } from "@apollo/react-hooks";
import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { client } from "../../utils/apollo";
import Blog from "../BlogPage/BlogPage";
import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage//NotFoundPage";
import RecipesPage from "../RecipesPage/RecipesPage";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/recipes" exact>
              <RecipesPage />
            </Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
