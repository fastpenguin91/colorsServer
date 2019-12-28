// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  color: (where?: ColorWhereInput) => Promise<boolean>;
  course: (where?: CourseWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  color: (where: ColorWhereUniqueInput) => ColorNullablePromise;
  colors: (args?: {
    where?: ColorWhereInput;
    orderBy?: ColorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Color>;
  colorsConnection: (args?: {
    where?: ColorWhereInput;
    orderBy?: ColorOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ColorConnectionPromise;
  course: (where: CourseWhereUniqueInput) => CourseNullablePromise;
  courses: (args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Course>;
  coursesConnection: (args?: {
    where?: CourseWhereInput;
    orderBy?: CourseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CourseConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createColor: (data: ColorCreateInput) => ColorPromise;
  updateColor: (args: {
    data: ColorUpdateInput;
    where: ColorWhereUniqueInput;
  }) => ColorPromise;
  updateManyColors: (args: {
    data: ColorUpdateManyMutationInput;
    where?: ColorWhereInput;
  }) => BatchPayloadPromise;
  upsertColor: (args: {
    where: ColorWhereUniqueInput;
    create: ColorCreateInput;
    update: ColorUpdateInput;
  }) => ColorPromise;
  deleteColor: (where: ColorWhereUniqueInput) => ColorPromise;
  deleteManyColors: (where?: ColorWhereInput) => BatchPayloadPromise;
  createCourse: (data: CourseCreateInput) => CoursePromise;
  updateCourse: (args: {
    data: CourseUpdateInput;
    where: CourseWhereUniqueInput;
  }) => CoursePromise;
  updateManyCourses: (args: {
    data: CourseUpdateManyMutationInput;
    where?: CourseWhereInput;
  }) => BatchPayloadPromise;
  upsertCourse: (args: {
    where: CourseWhereUniqueInput;
    create: CourseCreateInput;
    update: CourseUpdateInput;
  }) => CoursePromise;
  deleteCourse: (where: CourseWhereUniqueInput) => CoursePromise;
  deleteManyCourses: (where?: CourseWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  color: (
    where?: ColorSubscriptionWhereInput
  ) => ColorSubscriptionPayloadSubscription;
  course: (
    where?: CourseSubscriptionWhereInput
  ) => CourseSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ColorOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "color_code_ASC"
  | "color_code_DESC";

export type CourseOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "length_ASC"
  | "length_DESC";

export type UserOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ColorWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ColorWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  color_code?: Maybe<String>;
  color_code_not?: Maybe<String>;
  color_code_in?: Maybe<String[] | String>;
  color_code_not_in?: Maybe<String[] | String>;
  color_code_lt?: Maybe<String>;
  color_code_lte?: Maybe<String>;
  color_code_gt?: Maybe<String>;
  color_code_gte?: Maybe<String>;
  color_code_contains?: Maybe<String>;
  color_code_not_contains?: Maybe<String>;
  color_code_starts_with?: Maybe<String>;
  color_code_not_starts_with?: Maybe<String>;
  color_code_ends_with?: Maybe<String>;
  color_code_not_ends_with?: Maybe<String>;
  AND?: Maybe<ColorWhereInput[] | ColorWhereInput>;
  OR?: Maybe<ColorWhereInput[] | ColorWhereInput>;
  NOT?: Maybe<ColorWhereInput[] | ColorWhereInput>;
}

export type CourseWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CourseWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  length?: Maybe<String>;
  length_not?: Maybe<String>;
  length_in?: Maybe<String[] | String>;
  length_not_in?: Maybe<String[] | String>;
  length_lt?: Maybe<String>;
  length_lte?: Maybe<String>;
  length_gt?: Maybe<String>;
  length_gte?: Maybe<String>;
  length_contains?: Maybe<String>;
  length_not_contains?: Maybe<String>;
  length_starts_with?: Maybe<String>;
  length_not_starts_with?: Maybe<String>;
  length_ends_with?: Maybe<String>;
  length_not_ends_with?: Maybe<String>;
  AND?: Maybe<CourseWhereInput[] | CourseWhereInput>;
  OR?: Maybe<CourseWhereInput[] | CourseWhereInput>;
  NOT?: Maybe<CourseWhereInput[] | CourseWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface ColorCreateInput {
  id?: Maybe<ID_Input>;
  color_code: String;
}

export interface ColorUpdateInput {
  color_code?: Maybe<String>;
}

export interface ColorUpdateManyMutationInput {
  color_code?: Maybe<String>;
}

export interface CourseCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  length: String;
}

export interface CourseUpdateInput {
  title?: Maybe<String>;
  length?: Maybe<String>;
}

export interface CourseUpdateManyMutationInput {
  title?: Maybe<String>;
  length?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface ColorSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ColorWhereInput>;
  AND?: Maybe<ColorSubscriptionWhereInput[] | ColorSubscriptionWhereInput>;
  OR?: Maybe<ColorSubscriptionWhereInput[] | ColorSubscriptionWhereInput>;
  NOT?: Maybe<ColorSubscriptionWhereInput[] | ColorSubscriptionWhereInput>;
}

export interface CourseSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CourseWhereInput>;
  AND?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
  OR?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
  NOT?: Maybe<CourseSubscriptionWhereInput[] | CourseSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Color {
  id: ID_Output;
  color_code: String;
}

export interface ColorPromise extends Promise<Color>, Fragmentable {
  id: () => Promise<ID_Output>;
  color_code: () => Promise<String>;
}

export interface ColorSubscription
  extends Promise<AsyncIterator<Color>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  color_code: () => Promise<AsyncIterator<String>>;
}

export interface ColorNullablePromise
  extends Promise<Color | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  color_code: () => Promise<String>;
}

export interface ColorConnection {
  pageInfo: PageInfo;
  edges: ColorEdge[];
}

export interface ColorConnectionPromise
  extends Promise<ColorConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ColorEdge>>() => T;
  aggregate: <T = AggregateColorPromise>() => T;
}

export interface ColorConnectionSubscription
  extends Promise<AsyncIterator<ColorConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ColorEdgeSubscription>>>() => T;
  aggregate: <T = AggregateColorSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ColorEdge {
  node: Color;
  cursor: String;
}

export interface ColorEdgePromise extends Promise<ColorEdge>, Fragmentable {
  node: <T = ColorPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ColorEdgeSubscription
  extends Promise<AsyncIterator<ColorEdge>>,
    Fragmentable {
  node: <T = ColorSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateColor {
  count: Int;
}

export interface AggregateColorPromise
  extends Promise<AggregateColor>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateColorSubscription
  extends Promise<AsyncIterator<AggregateColor>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Course {
  id: ID_Output;
  title: String;
  length: String;
}

export interface CoursePromise extends Promise<Course>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  length: () => Promise<String>;
}

export interface CourseSubscription
  extends Promise<AsyncIterator<Course>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  length: () => Promise<AsyncIterator<String>>;
}

export interface CourseNullablePromise
  extends Promise<Course | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  length: () => Promise<String>;
}

export interface CourseConnection {
  pageInfo: PageInfo;
  edges: CourseEdge[];
}

export interface CourseConnectionPromise
  extends Promise<CourseConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CourseEdge>>() => T;
  aggregate: <T = AggregateCoursePromise>() => T;
}

export interface CourseConnectionSubscription
  extends Promise<AsyncIterator<CourseConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CourseEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCourseSubscription>() => T;
}

export interface CourseEdge {
  node: Course;
  cursor: String;
}

export interface CourseEdgePromise extends Promise<CourseEdge>, Fragmentable {
  node: <T = CoursePromise>() => T;
  cursor: () => Promise<String>;
}

export interface CourseEdgeSubscription
  extends Promise<AsyncIterator<CourseEdge>>,
    Fragmentable {
  node: <T = CourseSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCourse {
  count: Int;
}

export interface AggregateCoursePromise
  extends Promise<AggregateCourse>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCourseSubscription
  extends Promise<AsyncIterator<AggregateCourse>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ColorSubscriptionPayload {
  mutation: MutationType;
  node: Color;
  updatedFields: String[];
  previousValues: ColorPreviousValues;
}

export interface ColorSubscriptionPayloadPromise
  extends Promise<ColorSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ColorPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ColorPreviousValuesPromise>() => T;
}

export interface ColorSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ColorSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ColorSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ColorPreviousValuesSubscription>() => T;
}

export interface ColorPreviousValues {
  id: ID_Output;
  color_code: String;
}

export interface ColorPreviousValuesPromise
  extends Promise<ColorPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  color_code: () => Promise<String>;
}

export interface ColorPreviousValuesSubscription
  extends Promise<AsyncIterator<ColorPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  color_code: () => Promise<AsyncIterator<String>>;
}

export interface CourseSubscriptionPayload {
  mutation: MutationType;
  node: Course;
  updatedFields: String[];
  previousValues: CoursePreviousValues;
}

export interface CourseSubscriptionPayloadPromise
  extends Promise<CourseSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CoursePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CoursePreviousValuesPromise>() => T;
}

export interface CourseSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CourseSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CourseSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CoursePreviousValuesSubscription>() => T;
}

export interface CoursePreviousValues {
  id: ID_Output;
  title: String;
  length: String;
}

export interface CoursePreviousValuesPromise
  extends Promise<CoursePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  length: () => Promise<String>;
}

export interface CoursePreviousValuesSubscription
  extends Promise<AsyncIterator<CoursePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  length: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Color",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Course",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
