import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div>
      <p className="title-not-found">Ooops...</p>
      <p className="title-not-found">Halaman Tidak Ditemukan</p>
    </div>
  );
}

export default Custom404;
