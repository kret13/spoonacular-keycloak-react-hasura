require("dotenv").config();

const prefix = `
`;

module.exports = {
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      schema: {
        "http://localhost:8081/v1/graphql": {
          headers: {
            "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
          },
        },
      },
      documents: ["./src/**/*.graphql", "./src/**/*.gql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        { add: { content: prefix, placement: "prepend" } },
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};
