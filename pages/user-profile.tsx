import { GetServerSideProps, GetServerSidePropsContext } from "next";

const UserProfile = (props: any) => {
  return <div>{props.userName}</div>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req, res } = context;

  console.log("server side");
  return {
    props: {
      userName: "jay",
    },
  };
}
export default UserProfile;
