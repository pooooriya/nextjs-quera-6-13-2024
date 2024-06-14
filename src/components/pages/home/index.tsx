import Card from "@/components/basic/card";
import Container from "@/components/basic/container";
import Link from "next/link";
import React from "react";

const HomePage = ({ products }: any) => {
  return (
    <Container>
      <div className="flex flex-wrap">
        {products.map((item: any) => (
          <div className="w-3/12 p-2" key={item.title}>
            <Link href={`/product/${item.id}`}>
              <Card {...item} />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomePage;
