import fs from "fs/promises";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import path from "path";

export type prdType = {
  id: string;
  title: string;
};
export type HomeProps = {
  prd: prdType[];
};
const Home = (props: HomeProps) => {
  const { prd } = props;
  return (
    <ul>
      {prd.map((p) => (
        <li key={p.id}>
          <Link href={`/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
export async function getStaticProps(context: GetStaticPropsContext) {
  const filePath = path.join(process.cwd(), `data`, `dummy.json`);
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }
  if (data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      prd: data.prd,
    },
    revalidate: 2, //This is ISR build or  refresh page every 2 seconds used if your data is new everyminutes like ecommerce
  };
}
