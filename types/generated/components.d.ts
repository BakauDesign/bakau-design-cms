import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    judul: Schema.Attribute.String;
    link: Schema.Attribute.Text;
  };
}

export interface BlocksFooter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'Footer';
    icon: 'puzzle';
  };
  attributes: {
    deskripsi: Schema.Attribute.String & Schema.Attribute.Required;
    hak_cipta: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    menu: Schema.Attribute.Component<'navigations.menu-footer', true> &
      Schema.Attribute.Required;
  };
}

export interface BlocksSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sections';
  info: {
    displayName: 'Konten';
    icon: 'picture';
  };
  attributes: {
    judul: Schema.Attribute.String;
    judul_pendukung: Schema.Attribute.String;
  };
}

export interface BlocksService extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Layanan';
    icon: 'stack';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    deskripsi: Schema.Attribute.Text & Schema.Attribute.Required;
    nama: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksTag extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tags';
  info: {
    displayName: 'Penanda';
    icon: 'bold';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface BlocksVisionAndMission extends Struct.ComponentSchema {
  collectionName: 'components_blocks_vision_and_missions';
  info: {
    displayName: 'Visi dan Misi';
    icon: 'quote';
  };
  attributes: {
    konten_misi: Schema.Attribute.Text;
    konten_visi: Schema.Attribute.Text;
    label_misi: Schema.Attribute.String;
    label_visi: Schema.Attribute.String;
  };
}

export interface BlocksWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_workflows';
  info: {
    displayName: 'Alur Kerja';
    icon: 'bulletList';
  };
  attributes: {
    deskripsi: Schema.Attribute.Text;
    nama: Schema.Attribute.String;
    nomor: Schema.Attribute.Integer;
    penanda: Schema.Attribute.Component<'blocks.tag', true>;
  };
}

export interface NavigationsLink extends Struct.ComponentSchema {
  collectionName: 'components_navigations_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationsMenuFooter extends Struct.ComponentSchema {
  collectionName: 'components_navigations_menu_footers';
  info: {
    displayName: 'Menu Footer';
    icon: 'bulletList';
  };
  attributes: {
    nama: Schema.Attribute.String;
    sub_menu: Schema.Attribute.Component<'navigations.link', true>;
  };
}

export interface SectionsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_uses';
  info: {
    displayName: 'Tentang Kami';
    icon: 'file';
  };
  attributes: {
    konten: Schema.Attribute.Component<'blocks.section', false>;
    visi_dan_misi: Schema.Attribute.Component<
      'blocks.vision-and-mission',
      false
    >;
  };
}

export interface SectionsOurService extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_services';
  info: {
    displayName: 'Layanan Kami';
    icon: 'apps';
  };
  attributes: {
    daftar_layanan: Schema.Attribute.Component<'blocks.service', true>;
    konten: Schema.Attribute.Component<'blocks.section', false>;
  };
}

export interface SectionsWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_sections_workflows';
  info: {
    displayName: 'Alur Kerja Kami';
    icon: 'bulletList';
  };
  attributes: {
    daftar_alur_kerja: Schema.Attribute.Component<'blocks.workflow', true>;
    konten: Schema.Attribute.Component<'blocks.section', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.cta': BlocksCta;
      'blocks.footer': BlocksFooter;
      'blocks.section': BlocksSection;
      'blocks.service': BlocksService;
      'blocks.tag': BlocksTag;
      'blocks.vision-and-mission': BlocksVisionAndMission;
      'blocks.workflow': BlocksWorkflow;
      'navigations.link': NavigationsLink;
      'navigations.menu-footer': NavigationsMenuFooter;
      'sections.about-us': SectionsAboutUs;
      'sections.our-service': SectionsOurService;
      'sections.workflow': SectionsWorkflow;
    }
  }
}
