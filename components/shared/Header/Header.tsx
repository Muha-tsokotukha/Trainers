import { getTranslation } from '@/app/i18n';
import { Logo } from '@/public/assets/Logo';
import Link from 'next/link';
import styles from './Header.module.css';
import { links } from './links';

export const Header: React.FC<{ lng: string }> = async ({ lng }) => {
  const { t } = await getTranslation(lng, 'header');

  return (
    <header className={styles.container}>
      <Logo />

      {links.map((link) => (
        <Link key={link.link} href={link.link}>
          {t(link.title)}
        </Link>
      ))}
    </header>
  );
};
