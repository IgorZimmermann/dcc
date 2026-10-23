import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationEmail extends Struct.ComponentSchema {
  collectionName: 'components_navigation_emails';
  info: {
    displayName: 'Email';
    icon: 'envelop';
  };
  attributes: {
    address: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NavigationInternalPage extends Struct.ComponentSchema {
  collectionName: 'components_navigation_internal_pages';
  info: {
    displayName: 'Internal Page';
    icon: 'cursor';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NavigationSocial extends Struct.ComponentSchema {
  collectionName: 'components_navigation_socials';
  info: {
    displayName: 'Social';
    icon: 'thumbUp';
  };
  attributes: {
    site: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'navigation.email': NavigationEmail;
      'navigation.internal-page': NavigationInternalPage;
      'navigation.social': NavigationSocial;
    }
  }
}
