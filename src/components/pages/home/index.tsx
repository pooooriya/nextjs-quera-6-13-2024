import Card from "@/components/basic/card";
import Container from "@/components/basic/container";
import { useProductsQuery } from "@/services/queries/useProductsQuery";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  const { data, isLoading } = useProductsQuery();
  console.log("salam");
  if (isLoading) return <>loading ...</>;
  return (
    <Container>
      <div className="flex flex-wrap">
        {data.map((item: any) => (
          <div className="w-3/12 p-2" key={item.title}>
            <Card
              {...item}
              onClick={() => {
                router.push(`/product/${item.id}`);
              }}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomePage;
