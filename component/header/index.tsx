import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.nav}>
        <Image src="/Logo dark.png" width={50} height={50} alt="Logo" />
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/user">
              <a>Users</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
