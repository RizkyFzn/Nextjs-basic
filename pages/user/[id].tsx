/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Layout from '../../component/layout';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}

function detail(props: UserDetailProps) {
  const { user } = props;
  return (
    <Layout pageTitle="Detail">
      <p> {user.name} </p>
      <p> {user.email} </p>
      <p> {user.phone} </p>
      <p> {user.website} </p>
    </Layout>
  );
}

export default detail;

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUser = await res.json();
  const paths = dataUser.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
