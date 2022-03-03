/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useRouter } from 'next/router';
import Layout from '../../component/layout';
import styles from '../../styles/User.module.css';

interface UserProps {
  dataUser: Array<any>;
}
function User(props: UserProps) {
  const { dataUser } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="User Page">
      {dataUser.map((user) => (
        <div key={user.id} onClick={() => router.push(`/user/${user.id}`)} className={styles.card}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUser = await res.json();
  return {
    props: {
      // sama dengan dataUser: dataUser,
      dataUser,
    },
  };
}

export default User;
