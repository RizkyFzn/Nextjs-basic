/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Layout from '../component/layout';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={styles['title-homepage']}>Selamat Datang</h1>
      <p>Situs adalah situs static yang dibangun dengan menggunakan NextJS.</p>
      <p>
        Pada website ini terdapat 2 halaman yaitu blog dan user.
        <br />
        Pada halaman blog terdapat kumpulan judul dan konten blog yang diambil dari https://jsonplaceholder.typicode.com/posts
        <br />
        Sedangkan pada halaman user terdapat user yang diambil dari https://jsonplaceholder.typicode.com/users
      </p>
    </Layout>
  );
}

export default Home;
