import Image from "next/image";
import React from "react";

const ProductDetailPage = ({ image, title, description }: any) => {
  return (
    <div className="flex justify-center items-center">
      <Image src={image} width={300} height={300} alt={title} />
      <ul>
        <li>{title}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default ProductDetailPage;
