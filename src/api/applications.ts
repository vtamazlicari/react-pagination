import api from "../lib/axios";

export interface Application {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
}

export interface ApplicationsList {
  appRows: Application[];
  totalCount: number;
}

export interface FetchApplicationsQuery {
  pageNumber: number;
  pageSize: PageSize;
  appName: string;
  category: string;
}

export type PageSize = 25 | 50;

export const applicationKeys = {
  all: ["applications"] as const,
  list: (query: FetchApplicationsQuery) =>
    [
      ...applicationKeys.all,
      "list",
      query.pageNumber,
      query.pageSize,
      query.appName,
      query.category,
    ] as const,
};

export async function fetchApplications(
  query: FetchApplicationsQuery,
): Promise<ApplicationsList> {
  const { data } = await api.put<ApplicationsList>(
    "/app-service/get-apps",
    query,
  );

  return data;
}
