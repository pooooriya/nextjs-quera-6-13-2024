import HomePage from "@/components/pages/home";
import { AXIOS } from "@/config/axios";

export default function Home(props) {
  return <HomePage {...props} />;
}

export async function getServerSideProps() {
  let response;
  try {
    response = await AXIOS.get("/products");
  } catch (error) {}

  return {
    props: {
      products: response?.data || null,
    },
  };
}
