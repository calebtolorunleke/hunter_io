import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return { title: `Product ${params.productId}` };
};

export default function productList({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about product {params.productId}</h1>;
}
