import { GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";
import useSWR from "swr";
const LastSales = (props: {
  sales: { id: string; username: string; volume: string }[];
}) => {
  const [sales, setSales] = useState<
    { id: string; username: string; volume: string }[]
  >(props.sales);
  //   const [isLoading, setIsloading] = useState(false);

  const { data, error } = useSWR(
    "https://next-js-d0939-default-rtdb.firebaseio.com/sales.json",
    (url) =>
      fetch(url).then((res) => {
        console.log("swr");
        return res.json();
      })
  );
  //   console.log("calling swr");
  useEffect(() => {
    console.log("data", data);
    console.log("error", error);

    if (data) {
      const trans = [];
      for (const key in data) {
        trans.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(trans);
    }
  }, [data]);

  if (error) {
    return <div>error sales</div>;
  }
  if (!data && !sales) {
    return <div>loading...</div>;
  }
  return (
    <ul>
      {sales.map((res) => (
        <li key={res.id}>
          {res.username} - {res.volume}
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const response = await fetch(
    "https://next-js-d0939-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();
  console.log("Data", data);
  const trans = [];
  for (const key in data) {
    trans.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  console.log("trans", trans);
  return {
    props: {
      sales: trans,
    },
  };
}
export default LastSales;
