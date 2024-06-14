import { useQuery } from "react-query";
import { QueryKeys } from "../keys";
import { AXIOS } from "@/config/axios";

const fetcher = () => AXIOS.get("/products").then((res) => res.data);
export const useProductsQuery = () => {
  return useQuery({
    queryKey: QueryKeys.products,
    queryFn: fetcher,
  });
};
