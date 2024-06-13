import React from "react";

const SlugPage = ({ categories }) => {
  return (
    <div>
      {categories?.sub_categories?.map((item, index) => (
        <div key={item.title_fa}>{item.title_fa}</div>
      ))}
    </div>
  );
};

export default SlugPage;

// export async function getServerSideProps(ctx) {
//   let response;
//   try {
//     response = await fetch(
//       `https://api.digikala.com/v1/categories/${ctx.params.slug}/`
//     )
//       .then((res) => res.json())
//       .then((res) => res);
//   } catch (error) {}
//   return {
//     props: {
//       categories: response.data || null,
//     },
//   };
// }

export async function getStaticProps(ctx) {
  let response;
  try {
    console.log("Start Refetching ....");
    response = await fetch(
      `https://api.digikala.com/v1/categories/${ctx.params.slug}/`
    )
      .then((res) => res.json())
      .then((res) => res);
  } catch (error) {}
  return {
    props: {
      categories: response.data || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths(ctx) {
  // api call => category
  return {
    paths: [
      {
        params: {
          slug: "book-and-media",
        },
      },
      {
        params: {
          slug: "vehicles-spare-parts",
        },
      },
    ],
    fallback: false,
  };
}
