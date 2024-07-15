import api from './config';

// Get Event
export interface IGetEventResponse {
  status: number;
  data: eventProps;
};
export type eventProps = {
  id: number;
  attributes: {
    Name: string;
    Date: string;
    Day: eventDayProps[] | null;
    Price: string;
    Description: string;
    Image: {
      data: {
        attributes: {
          name: string;
          alternativeText: string;
          url: string;
          width: number;
          height: number;
        };
      } | null;
    };
  };
};
export type eventDayProps = {
  id: number;
  StartTime: string;
  EndTime: string;
  Price: string;
};
export const apiGetEvent = {
  get: (id?: string) =>
    api.get<IGetEventResponse>(`events/${id ?? '0'}?populate[Image][fields][0]=height&populate[Image][fields][1]=width&populate[Image][fields][2]=url&populate[Image][fields][3]=alternativeText&populate[Day][fields][4]=StartTime&populate[Day][fields][5]=EndTime&populate[Day][fields][6]=Price`)
};

// Get Page
export interface IGetPageResponse {
  status: number;
  data: pagesProps;
};
export interface pagesProps {
  data: pageProps[] | null;
};
export interface pageProps {
  id: number;
  attributes: {
    Title: string;
    Slug: string;
    Content: string;
    SEODescription: string;
    Image: {
      data: {
        attributes: {
          name: string;
          alternativeText: string;
          url: string;
          width: number;
          height: number;
        };
      } | null;
    };
  };
};
export const apiGetPage = {
  get: (slug?: string) =>
    api.get<IGetPageResponse>(`pages?populate[Image][fields][0]=height&populate[Image][fields][1]=width&populate[Image][fields][2]=url&populate[Image][fields][3]=alternativeText&filters[Slug][$eq]=${slug ? (slug.toLowerCase()) : ''}`)
};

// Get Project
export interface IGetProjectResponse {
  status: number;
  data: projectProps;
};
export interface projectProps {
  id: number;
  attributes: {
    Name: string;
    Description: string;
    SEODescription: string;
    Image: {
      data: {
        attributes: {
          name: string;
          alternativeText: string;
          url: string;
          width: number;
          height: number;
        };
      } | null;
    };
  };
};
export const apiGetProject = {
  get: (id?: string) =>
    api.get<IGetProjectResponse>(`projects/${id ?? '0'}?populate[Image][fields][0]=height&populate[Image][fields][1]=width&populate[Image][fields][2]=url&populate[Image][fields][3]=alternativeText`)
};
