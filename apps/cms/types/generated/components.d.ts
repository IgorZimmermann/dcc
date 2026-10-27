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
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SectionsAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_actions';
  info: {
    displayName: 'Action';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSponsor extends Struct.ComponentSchema {
  collectionName: 'components_sections_sponsors';
  info: {
    displayName: 'Sponsor';
    icon: 'crown';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSponsorSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_sponsor_sections';
  info: {
    displayName: 'Sponsor Section';
    icon: 'bulletList';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    contents: Schema.Attribute.Component<'sections.text', true> &
      Schema.Attribute.Required;
    foreground: Schema.Attribute.Media<'images'>;
    sponsors: Schema.Attribute.Component<'sections.sponsor', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_sections';
  info: {
    displayName: 'Team Section';
    icon: 'emotionHappy';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    foreground: Schema.Attribute.Media<'images'>;
    groups: Schema.Attribute.Relation<'oneToMany', 'api::group.group'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsText extends Struct.ComponentSchema {
  collectionName: 'components_sections_texts';
  info: {
    displayName: 'Text';
    icon: 'layer';
  };
  attributes: {
    action: Schema.Attribute.Component<'sections.action', false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTextSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_sections';
  info: {
    displayName: 'Text Section';
    icon: 'quote';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    contents: Schema.Attribute.Component<'sections.text', true> &
      Schema.Attribute.Required;
    foreground: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'navigation.email': NavigationEmail;
      'navigation.internal-page': NavigationInternalPage;
      'navigation.social': NavigationSocial;
      'sections.action': SectionsAction;
      'sections.sponsor': SectionsSponsor;
      'sections.sponsor-section': SectionsSponsorSection;
      'sections.team-section': SectionsTeamSection;
      'sections.text': SectionsText;
      'sections.text-section': SectionsTextSection;
    }
  }
}
