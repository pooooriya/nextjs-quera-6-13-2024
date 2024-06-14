import { useQuery } from "react-query";
import { QueryKeys } from "../keys";
import { AXIOS } from "@/config/axios";

const fetcher = (id: string) =>
  AXIOS.get("/products/" + id).then((res) => res.data);

export const useProductDetailQuery = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.product, id],
    queryFn: () => fetcher(id),
    enabled: !!id,
  });
};
