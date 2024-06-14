import ProductDetailPage from "@/components/pages/product/detail";
import { AXIOS } from "@/config/axios";
import React from "react";

const ProductDetail = ({ product }: any) => {
  return <ProductDetailPage {...product} />;
};

export default ProductDetail;

export async function getServerSideProps(ctx: any) {
  let response;
  try {
    response = await AXIOS.get(`/products/${ctx.params.id}`);
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      product: response?.data || null,
    },
  };
}
