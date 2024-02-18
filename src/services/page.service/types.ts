import { Discount, Education, HeaderMeta, HeaderSection, Partner, Teammate } from '@src/types';
import { Tag } from '../article.service/types';

export type ConsaltingDTO = {
  id: number;
  attributes: {
    HeaderMeta: HeaderMeta;
    header: HeaderSection;
    Standarts: {
      id: number;
      title: string;
      description: string;
    }[];
  };
};

export type HomePageDTO = {
  id: number;
  attributes: {
    header: HeaderSection;
    discount: Discount[];
    directions: {
      data: Education[];
    };
    partners: Partner[];
  };
};

export type AboutPageDTO = {
  id: number;
  attributes: {
    header: HeaderSection;
    directions: {
      data: Education[];
    };
    teams: {
      data: Teammate[];
    };
  };
};

export type ContactPageDTO = {
  id: number;
  attributes: {
    teams: {
      data: Teammate[];
    };
  };
};

export type VacancyPageDTO = {
  id: number;
  attributes: {
    header: HeaderSection;
    list: Tag[];
  };
};
