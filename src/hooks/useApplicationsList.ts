import {
  applicationKeys,
  fetchApplications,
  type FetchApplicationsQuery,
} from "../api/applications";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useApplicationsList(
  query: FetchApplicationsQuery = {
    pageNumber: 1,
    pageSize: 25,
    appName: "",
    category: "",
  },
) {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: applicationKeys.list(query),
    queryFn: () => fetchApplications(query),
    placeholderData: keepPreviousData,
  });

  const totalCount = data?.totalCount ?? 0;
  const totalPages = Math.ceil(totalCount / query.pageSize);

  return {
    applications: data?.appRows ?? [],
    totalCount,
    totalPages,
    isLoading,
    isFetching,
    error,
  };
}
