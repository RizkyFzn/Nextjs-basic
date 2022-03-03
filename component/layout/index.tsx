/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../footer';
import Header from '../header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJS | {pageTitle}</title>
        <meta name="description" content="Website NextJS" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
