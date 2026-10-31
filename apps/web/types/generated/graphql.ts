/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type DateTimeFilterInput = {
  and?: Array<string | null | undefined> | null | undefined;
  between?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  containsi?: string | null | undefined;
  endsWith?: string | null | undefined;
  eq?: string | null | undefined;
  eqi?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  ne?: string | null | undefined;
  nei?: string | null | undefined;
  not?: DateTimeFilterInput | null | undefined;
  notContains?: string | null | undefined;
  notContainsi?: string | null | undefined;
  notIn?: Array<string | null | undefined> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<string | null | undefined> | null | undefined;
  startsWith?: string | null | undefined;
};

export type IdFilterInput = {
  and?: Array<string | number | null | undefined> | null | undefined;
  between?: Array<string | number | null | undefined> | null | undefined;
  contains?: string | number | null | undefined;
  containsi?: string | number | null | undefined;
  endsWith?: string | number | null | undefined;
  eq?: string | number | null | undefined;
  eqi?: string | number | null | undefined;
  gt?: string | number | null | undefined;
  gte?: string | number | null | undefined;
  in?: Array<string | number | null | undefined> | null | undefined;
  lt?: string | number | null | undefined;
  lte?: string | number | null | undefined;
  ne?: string | number | null | undefined;
  nei?: string | number | null | undefined;
  not?: IdFilterInput | null | undefined;
  notContains?: string | number | null | undefined;
  notContainsi?: string | number | null | undefined;
  notIn?: Array<string | number | null | undefined> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<string | number | null | undefined> | null | undefined;
  startsWith?: string | number | null | undefined;
};

export type PageFiltersInput = {
  and?: Array<PageFiltersInput | null | undefined> | null | undefined;
  createdAt?: DateTimeFilterInput | null | undefined;
  description?: StringFilterInput | null | undefined;
  documentId?: IdFilterInput | null | undefined;
  not?: PageFiltersInput | null | undefined;
  or?: Array<PageFiltersInput | null | undefined> | null | undefined;
  publishedAt?: DateTimeFilterInput | null | undefined;
  slug?: StringFilterInput | null | undefined;
  title?: StringFilterInput | null | undefined;
  updatedAt?: DateTimeFilterInput | null | undefined;
};

export type PublicationStatus =
  | 'DRAFT'
  | 'PUBLISHED';

export type StringFilterInput = {
  and?: Array<string | null | undefined> | null | undefined;
  between?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  containsi?: string | null | undefined;
  endsWith?: string | null | undefined;
  eq?: string | null | undefined;
  eqi?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  ne?: string | null | undefined;
  nei?: string | null | undefined;
  not?: StringFilterInput | null | undefined;
  notContains?: string | null | undefined;
  notContainsi?: string | null | undefined;
  notIn?: Array<string | null | undefined> | null | undefined;
  notNull?: boolean | null | undefined;
  null?: boolean | null | undefined;
  or?: Array<string | null | undefined> | null | undefined;
  startsWith?: string | null | undefined;
};

export type NavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationQuery = { navigation: { motto: string, email: { address: string }, links: Array<{ text: string, id: string, page: { slug: string } } | null>, socials: Array<{ site: string, url: string, id: string } | null> } | null };

export type PageSlugsQueryVariables = Exact<{
  status?: PublicationStatus | null | undefined;
}>;


export type PageSlugsQuery = { pages: Array<{ slug: string } | null> };

export type PagesQueryVariables = Exact<{
  filters?: PageFiltersInput | null | undefined;
}>;


export type PagesQuery = { pages: Array<{ slug: string, title: string, description: string, sections: Array<
      | { __typename: 'ComponentSectionsSponsorSection', id: string, title: string, background: { alternativeText: string | null, url: string }, foreground: { alternativeText: string | null, url: string } | null, sponsors: Array<{ id: string, name: string, url: string, image: { alternativeText: string | null, url: string } } | null>, contents: Array<{ id: string, text: string, title: string, action: { link: string, text: string } | null } | null> }
      | { __typename: 'ComponentSectionsTeamSection', id: string, title: string, background: { alternativeText: string | null, url: string }, foreground: { alternativeText: string | null, url: string } | null, groups: Array<{ title: string, members: Array<{ name: string, title: string | null, portrait: { alternativeText: string | null, url: string } | null } | null> } | null> }
      | { __typename: 'ComponentSectionsTextSection', id: string, title: string, foreground: { alternativeText: string | null, url: string } | null, background: { alternativeText: string | null, url: string }, contents: Array<{ id: string, text: string, title: string, action: { link: string, text: string } | null } | null> }
      | { __typename: 'Error' }
     | null> } | null> };

export type PagesSitemapQueryVariables = Exact<{
  status?: PublicationStatus | null | undefined;
}>;


export type PagesSitemapQuery = { pages: Array<{ updatedAt: string | null, slug: string } | null> };


export const NavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"motto"}}]}}]}}]} as unknown as DocumentNode<NavigationQuery, NavigationQueryVariables>;
export const PageSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageSlugs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PageSlugsQuery, PageSlugsQueryVariables>;
export const PagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PageFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTextSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"foreground"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsTeamSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"foreground"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"portrait"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentSectionsSponsorSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"foreground"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"action"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PagesQuery, PagesQueryVariables>;
export const PagesSitemapDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PagesSitemap"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PagesSitemapQuery, PagesSitemapQueryVariables>;