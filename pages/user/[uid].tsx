import { GetServerSidePropsContext } from "next";

const UserInfo = (props: any) => {
  return <div>{props.id}</div>;
};

export default UserInfo;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  return {
    props: {
      id: "user" + params?.uid,
    },
  };
}
