import {
  HomePageDTO,
  ConsaltingDTO,
  AboutPageDTO,
  ContactPageDTO,
  VacancyPageDTO,
} from "./types";
import { request } from "@utils/request";

class PageService {
  async getConsaltingPage() {
    try {
      const res = await request.get<{ data: ConsaltingDTO }>(
        `/api/consalting?populate=HeaderMeta,Standarts,header,header.image,header.list`
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getHomePage() {
    try {
      const res = await request.get<{ data: HomePageDTO }>(
        `/api/home?populate=partners.image,directions.image,directions.category,discount.image,header,header.image,header.list`
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getAboutPage() {
    try {
      const res = await request.get<{ data: AboutPageDTO }>(
        `/api/about?populate=teams.image,directions.category,directions.image,header,header.image,header.list`,
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getContactPage() {
    try {
      const res = await request.get<{ data: ContactPageDTO }>(
        `/api/contact?populate=teams.image,header,header.image,header.list`
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getVacancyPage() {
    try {
      const res = await request.get<{ data: VacancyPageDTO }>(
        `/api/vacancy-page?populate=list,header,header.image,header.list`
      );

      const {
        data: { data },
      } = res;

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const pageService = new PageService();
