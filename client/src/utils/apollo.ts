import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, Observable } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { keycloak } from "../components/AuthProvider/AuthProvider";

const cache = new InMemoryCache({});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;

      (async (operation) => {
        if (keycloak.isTokenExpired(30)) {
          try {
            const refreshed = await keycloak.updateToken(30);
            if (refreshed) {
              console.log("Token was successfully refreshed ");
            } else {
              console.log("Token is still valid");
            }
          } catch (e) {
            console.log(
              "Failed to refresh the token, or the session has expired"
            );
          }
        }
        if (keycloak.token) {
          operation.setContext({
            headers: {
              authorization: `Bearer ${keycloak.token}`,
            },
          });
        }

        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })(operation);

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors);
      console.log(networkError);
    }),
    requestLink,
    new HttpLink({
      uri: "http://localhost:8081/v1/graphql",
      credentials: "include",
    }),
  ]),
  cache,
});
