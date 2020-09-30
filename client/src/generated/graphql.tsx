import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamptz: any;
  uuid: any;
};

export type FindByIngredientsInput = {
  ingredients: Scalars['String'];
  number: Scalars['Int'];
};

export type FindByIngredientsOutput = {
  __typename?: 'FindByIngredientsOutput';
  response: Scalars['String'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "test" */
  delete_test?: Maybe<Test_Mutation_Response>;
  /** delete single row from the table: "test" */
  delete_test_by_pk?: Maybe<Test>;
  /** perform the action: "findByIngredients" */
  findByIngredients: FindByIngredientsOutput;
  /** insert data into the table: "test" */
  insert_test?: Maybe<Test_Mutation_Response>;
  /** insert a single row into the table: "test" */
  insert_test_one?: Maybe<Test>;
  /** update data of the table: "test" */
  update_test?: Maybe<Test_Mutation_Response>;
  /** update single row of the table: "test" */
  update_test_by_pk?: Maybe<Test>;
};


/** mutation root */
export type Mutation_RootDelete_TestArgs = {
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootFindByIngredientsArgs = {
  args: FindByIngredientsInput;
};


/** mutation root */
export type Mutation_RootInsert_TestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: Maybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_OneArgs = {
  object: Test_Insert_Input;
  on_conflict?: Maybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TestArgs = {
  _inc?: Maybe<Test_Inc_Input>;
  _set?: Maybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_By_PkArgs = {
  _inc?: Maybe<Test_Inc_Input>;
  _set?: Maybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
};


/** query root */
export type Query_RootTestArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};


/** query root */
export type Query_RootTest_AggregateArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};


/** query root */
export type Query_RootTest_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
};


/** subscription root */
export type Subscription_RootTestArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTest_AggregateArgs = {
  distinct_on?: Maybe<Array<Test_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Test_Order_By>>;
  where?: Maybe<Test_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTest_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test';
  id: Scalars['Int'];
};

/** aggregated selection of "test" */
export type Test_Aggregate = {
  __typename?: 'test_aggregate';
  aggregate?: Maybe<Test_Aggregate_Fields>;
  nodes: Array<Test>;
};

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
  __typename?: 'test_aggregate_fields';
  avg?: Maybe<Test_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Test_Max_Fields>;
  min?: Maybe<Test_Min_Fields>;
  stddev?: Maybe<Test_Stddev_Fields>;
  stddev_pop?: Maybe<Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Test_Stddev_Samp_Fields>;
  sum?: Maybe<Test_Sum_Fields>;
  var_pop?: Maybe<Test_Var_Pop_Fields>;
  var_samp?: Maybe<Test_Var_Samp_Fields>;
  variance?: Maybe<Test_Variance_Fields>;
};


/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Test_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "test" */
export type Test_Aggregate_Order_By = {
  avg?: Maybe<Test_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Test_Max_Order_By>;
  min?: Maybe<Test_Min_Order_By>;
  stddev?: Maybe<Test_Stddev_Order_By>;
  stddev_pop?: Maybe<Test_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Test_Stddev_Samp_Order_By>;
  sum?: Maybe<Test_Sum_Order_By>;
  var_pop?: Maybe<Test_Var_Pop_Order_By>;
  var_samp?: Maybe<Test_Var_Samp_Order_By>;
  variance?: Maybe<Test_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "test" */
export type Test_Arr_Rel_Insert_Input = {
  data: Array<Test_Insert_Input>;
  on_conflict?: Maybe<Test_On_Conflict>;
};

/** aggregate avg on columns */
export type Test_Avg_Fields = {
  __typename?: 'test_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "test" */
export type Test_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Test_Bool_Exp>>>;
  _not?: Maybe<Test_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Test_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "test" */
export enum Test_Constraint {
  /** unique or primary key constraint */
  TestPkey = 'test_pkey'
}

/** input type for incrementing integer column in table "test" */
export type Test_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: 'test_max_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "test" */
export type Test_Max_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: 'test_min_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "test" */
export type Test_Min_Order_By = {
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
  __typename?: 'test_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Test>;
};

/** input type for inserting object relation for remote table "test" */
export type Test_Obj_Rel_Insert_Input = {
  data: Test_Insert_Input;
  on_conflict?: Maybe<Test_On_Conflict>;
};

/** on conflict condition type for table "test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns: Array<Test_Update_Column>;
  where?: Maybe<Test_Bool_Exp>;
};

/** ordering options when selecting data from "test" */
export type Test_Order_By = {
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "test" */
export type Test_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "test" */
export enum Test_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "test" */
export type Test_Set_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Test_Stddev_Fields = {
  __typename?: 'test_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "test" */
export type Test_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Test_Stddev_Pop_Fields = {
  __typename?: 'test_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "test" */
export type Test_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Test_Stddev_Samp_Fields = {
  __typename?: 'test_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "test" */
export type Test_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Test_Sum_Fields = {
  __typename?: 'test_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "test" */
export type Test_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "test" */
export enum Test_Update_Column {
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Test_Var_Pop_Fields = {
  __typename?: 'test_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "test" */
export type Test_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Test_Var_Samp_Fields = {
  __typename?: 'test_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "test" */
export type Test_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Test_Variance_Fields = {
  __typename?: 'test_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "test" */
export type Test_Variance_Order_By = {
  id?: Maybe<Order_By>;
};



export type FindByIngredientsMutationVariables = Exact<{
  ingredients: Scalars['String'];
  number: Scalars['Int'];
}>;


export type FindByIngredientsMutation = (
  { __typename?: 'mutation_root' }
  & { findByIngredients: (
    { __typename?: 'FindByIngredientsOutput' }
    & Pick<FindByIngredientsOutput, 'response'>
  ) }
);


export const FindByIngredientsDocument = gql`
    mutation findByIngredients($ingredients: String!, $number: Int!) {
  findByIngredients(args: {ingredients: $ingredients, number: $number}) {
    response
  }
}
    `;
export type FindByIngredientsMutationFn = ApolloReactCommon.MutationFunction<FindByIngredientsMutation, FindByIngredientsMutationVariables>;

/**
 * __useFindByIngredientsMutation__
 *
 * To run a mutation, you first call `useFindByIngredientsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFindByIngredientsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [findByIngredientsMutation, { data, loading, error }] = useFindByIngredientsMutation({
 *   variables: {
 *      ingredients: // value for 'ingredients'
 *      number: // value for 'number'
 *   },
 * });
 */
export function useFindByIngredientsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FindByIngredientsMutation, FindByIngredientsMutationVariables>) {
        return ApolloReactHooks.useMutation<FindByIngredientsMutation, FindByIngredientsMutationVariables>(FindByIngredientsDocument, baseOptions);
      }
export type FindByIngredientsMutationHookResult = ReturnType<typeof useFindByIngredientsMutation>;
export type FindByIngredientsMutationResult = ApolloReactCommon.MutationResult<FindByIngredientsMutation>;
export type FindByIngredientsMutationOptions = ApolloReactCommon.BaseMutationOptions<FindByIngredientsMutation, FindByIngredientsMutationVariables>;