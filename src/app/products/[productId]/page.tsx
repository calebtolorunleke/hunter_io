export default function productList({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about product {params.productId}</h1>;
}
