import Layout from "@/components/layouts";
import { queryClient } from "@/services/queryClient";
import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}
