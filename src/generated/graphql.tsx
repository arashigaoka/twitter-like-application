import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
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

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "replys" */
  delete_replys?: Maybe<Replys_Mutation_Response>;
  /** delete single row from the table: "replys" */
  delete_replys_by_pk?: Maybe<Replys>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "replys" */
  insert_replys?: Maybe<Replys_Mutation_Response>;
  /** insert a single row into the table: "replys" */
  insert_replys_one?: Maybe<Replys>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "replys" */
  update_replys?: Maybe<Replys_Mutation_Response>;
  /** update single row of the table: "replys" */
  update_replys_by_pk?: Maybe<Replys>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ReplysArgs = {
  where: Replys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Replys_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReplysArgs = {
  objects: Array<Replys_Insert_Input>;
  on_conflict?: Maybe<Replys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Replys_OneArgs = {
  object: Replys_Insert_Input;
  on_conflict?: Maybe<Replys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReplysArgs = {
  _inc?: Maybe<Replys_Inc_Input>;
  _set?: Maybe<Replys_Set_Input>;
  where: Replys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Replys_By_PkArgs = {
  _inc?: Maybe<Replys_Inc_Input>;
  _set?: Maybe<Replys_Set_Input>;
  pk_columns: Replys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** fetch data from the table: "replys" */
  replys: Array<Replys>;
  /** An aggregate relationship */
  replys_aggregate: Replys_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};


/** columns and relationships of "posts" */
export type PostsReplysArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsReplys_AggregateArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: Maybe<Posts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Posts_Max_Order_By>;
  min?: Maybe<Posts_Min_Order_By>;
  stddev?: Maybe<Posts_Stddev_Order_By>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Order_By>;
  sum?: Maybe<Posts_Sum_Order_By>;
  var_pop?: Maybe<Posts_Var_Pop_Order_By>;
  var_samp?: Maybe<Posts_Var_Samp_Order_By>;
  variance?: Maybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Posts_Bool_Exp>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Posts_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  replys?: Maybe<Replys_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  replys?: Maybe<Replys_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns: Array<Posts_Update_Column>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  replys_aggregate?: Maybe<Replys_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "replys" */
  replys: Array<Replys>;
  /** An aggregate relationship */
  replys_aggregate: Replys_Aggregate;
  /** fetch data from the table: "replys" using primary key columns */
  replys_by_pk?: Maybe<Replys>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootReplysArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};


export type Query_RootReplys_AggregateArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};


export type Query_RootReplys_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "replys" */
export type Replys = {
  __typename?: 'replys';
  comment: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  replied_user_id: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByUserId: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "replys" */
export type Replys_Aggregate = {
  __typename?: 'replys_aggregate';
  aggregate?: Maybe<Replys_Aggregate_Fields>;
  nodes: Array<Replys>;
};

/** aggregate fields of "replys" */
export type Replys_Aggregate_Fields = {
  __typename?: 'replys_aggregate_fields';
  avg?: Maybe<Replys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Replys_Max_Fields>;
  min?: Maybe<Replys_Min_Fields>;
  stddev?: Maybe<Replys_Stddev_Fields>;
  stddev_pop?: Maybe<Replys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Replys_Stddev_Samp_Fields>;
  sum?: Maybe<Replys_Sum_Fields>;
  var_pop?: Maybe<Replys_Var_Pop_Fields>;
  var_samp?: Maybe<Replys_Var_Samp_Fields>;
  variance?: Maybe<Replys_Variance_Fields>;
};


/** aggregate fields of "replys" */
export type Replys_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Replys_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "replys" */
export type Replys_Aggregate_Order_By = {
  avg?: Maybe<Replys_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Replys_Max_Order_By>;
  min?: Maybe<Replys_Min_Order_By>;
  stddev?: Maybe<Replys_Stddev_Order_By>;
  stddev_pop?: Maybe<Replys_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Replys_Stddev_Samp_Order_By>;
  sum?: Maybe<Replys_Sum_Order_By>;
  var_pop?: Maybe<Replys_Var_Pop_Order_By>;
  var_samp?: Maybe<Replys_Var_Samp_Order_By>;
  variance?: Maybe<Replys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "replys" */
export type Replys_Arr_Rel_Insert_Input = {
  data: Array<Replys_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Replys_On_Conflict>;
};

/** aggregate avg on columns */
export type Replys_Avg_Fields = {
  __typename?: 'replys_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "replys" */
export type Replys_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "replys". All fields are combined with a logical 'AND'. */
export type Replys_Bool_Exp = {
  _and?: Maybe<Array<Replys_Bool_Exp>>;
  _not?: Maybe<Replys_Bool_Exp>;
  _or?: Maybe<Array<Replys_Bool_Exp>>;
  comment?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  replied_user_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userByUserId?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "replys" */
export enum Replys_Constraint {
  /** unique or primary key constraint */
  ReplysPkey = 'replys_pkey'
}

/** input type for incrementing numeric columns in table "replys" */
export type Replys_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "replys" */
export type Replys_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  replied_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userByUserId?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Replys_Max_Fields = {
  __typename?: 'replys_max_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  replied_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "replys" */
export type Replys_Max_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  replied_user_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Replys_Min_Fields = {
  __typename?: 'replys_min_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  replied_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "replys" */
export type Replys_Min_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  replied_user_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "replys" */
export type Replys_Mutation_Response = {
  __typename?: 'replys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Replys>;
};

/** on conflict condition type for table "replys" */
export type Replys_On_Conflict = {
  constraint: Replys_Constraint;
  update_columns: Array<Replys_Update_Column>;
  where?: Maybe<Replys_Bool_Exp>;
};

/** Ordering options when selecting data from "replys". */
export type Replys_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  replied_user_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userByUserId?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: replys */
export type Replys_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "replys" */
export enum Replys_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  RepliedUserId = 'replied_user_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "replys" */
export type Replys_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  replied_user_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Replys_Stddev_Fields = {
  __typename?: 'replys_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "replys" */
export type Replys_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Replys_Stddev_Pop_Fields = {
  __typename?: 'replys_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "replys" */
export type Replys_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Replys_Stddev_Samp_Fields = {
  __typename?: 'replys_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "replys" */
export type Replys_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Replys_Sum_Fields = {
  __typename?: 'replys_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "replys" */
export type Replys_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "replys" */
export enum Replys_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  RepliedUserId = 'replied_user_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Replys_Var_Pop_Fields = {
  __typename?: 'replys_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "replys" */
export type Replys_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Replys_Var_Samp_Fields = {
  __typename?: 'replys_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "replys" */
export type Replys_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Replys_Variance_Fields = {
  __typename?: 'replys_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "replys" */
export type Replys_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "replys" */
  replys: Array<Replys>;
  /** An aggregate relationship */
  replys_aggregate: Replys_Aggregate;
  /** fetch data from the table: "replys" using primary key columns */
  replys_by_pk?: Maybe<Replys>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootReplysArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};


export type Subscription_RootReplys_AggregateArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};


export type Subscription_RootReplys_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "replys" */
  replys: Array<Replys>;
  /** An array relationship */
  replysByUserId: Array<Replys>;
  /** An aggregate relationship */
  replysByUserId_aggregate: Replys_Aggregate;
  /** An aggregate relationship */
  replys_aggregate: Replys_Aggregate;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReplysArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReplysByUserIdArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReplysByUserId_AggregateArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReplys_AggregateArgs = {
  distinct_on?: Maybe<Array<Replys_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Replys_Order_By>>;
  where?: Maybe<Replys_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
  replys?: Maybe<Replys_Bool_Exp>;
  replysByUserId?: Maybe<Replys_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
  replys?: Maybe<Replys_Arr_Rel_Insert_Input>;
  replysByUserId?: Maybe<Replys_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
  replysByUserId_aggregate?: Maybe<Replys_Aggregate_Order_By>;
  replys_aggregate?: Maybe<Replys_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'user_id' | 'content'>
    & { user: (
      { __typename?: 'users' }
      & Pick<Users, 'name'>
    ) }
  )> }
);

export type AddPostsMutationVariables = Exact<{
  content: Scalars['String'];
  user_id: Scalars['String'];
}>;


export type AddPostsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_posts?: Maybe<(
    { __typename?: 'posts_mutation_response' }
    & Pick<Posts_Mutation_Response, 'affected_rows'>
  )> }
);


export const GetPostsDocument = gql`
    query getPosts {
  posts {
    id
    user_id
    content
    user {
      name
    }
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const AddPostsDocument = gql`
    mutation addPosts($content: String!, $user_id: String!) {
  insert_posts(
    objects: {content: $content, user_id: $user_id}
    on_conflict: {constraint: posts_pkey, update_columns: content}
  ) {
    affected_rows
  }
}
    `;
export type AddPostsMutationFn = Apollo.MutationFunction<AddPostsMutation, AddPostsMutationVariables>;

/**
 * __useAddPostsMutation__
 *
 * To run a mutation, you first call `useAddPostsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostsMutation, { data, loading, error }] = useAddPostsMutation({
 *   variables: {
 *      content: // value for 'content'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAddPostsMutation(baseOptions?: Apollo.MutationHookOptions<AddPostsMutation, AddPostsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPostsMutation, AddPostsMutationVariables>(AddPostsDocument, options);
      }
export type AddPostsMutationHookResult = ReturnType<typeof useAddPostsMutation>;
export type AddPostsMutationResult = Apollo.MutationResult<AddPostsMutation>;
export type AddPostsMutationOptions = Apollo.BaseMutationOptions<AddPostsMutation, AddPostsMutationVariables>;