import React, { Fragment } from "react";
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
} from "next";
import path from "path";
import { prdType } from ".";
import { getData } from "@/utilities/utils";

export type ProductDetailProps = {
  prd: prdType;
};
const ProductDetail = (props: ProductDetailProps) => {
  const { prd } = props;

  if (!prd) {
    return <p>Loading....</p>;
  }
  console.log("asdas", prd);
  return (
    <Fragment>
      <h1>asd</h1>
      {/* <h1>{prd.title}</h1>
      <p>{prd.id}</p> */}
    </Fragment>
  );
};

export type productType = {
  id: string;
  title: string;
};

interface Props {
  prd: productType;
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const productId = params?.pid;
  const data = await getData();
  const product = data.prd.find((data: productType) => data.id === productId);
  // console.log("asdsa", product);

  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      prd: product,
    },
  };
  // You can return props or notFound, revalidate, etc. based on your requirements
}

export async function getStaticPaths() {
  //this usually used with dynamic pages
  const data = await getData();
  const ids = data.prd.map((prod: productType) => prod.id);
  const params = ids.map((id: string) => ({ params: { pid: id } }));
  return {
    paths: params,
    fallback: true, // if this true page will like useeffect
  };
}
export default ProductDetail;
