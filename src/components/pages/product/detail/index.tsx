import { useProductDetailQuery } from "@/services/queries/useProductDetailQuery";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
const ProductDetailPage = () => {
  const router = useRouter();
  const { data, isLoading } = useProductDetailQuery(router.query.id as any);
  if (isLoading) return <>loading ...</>;
  return (
    <div className="flex justify-center items-center">
      <Image src={data?.image} width={300} height={300} alt={data?.title} />
      <ul>
        <li>{data?.title}</li>
        <li>{data?.description}</li>
      </ul>
    </div>
  );
};

export default ProductDetailPage;
