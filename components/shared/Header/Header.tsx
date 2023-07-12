import { getTranslation } from '@/app/i18n';
import { Button } from '@/components/shared';
import { Logo } from '@/public/assets/Logo';
import Link from 'next/link';
import styles from './Header.module.css';
import { links } from './links';

export const Header: React.FC<{ lng: string }> = async ({ lng }) => {
  const { t } = await getTranslation(lng, 'header');

  return (
    <header className={styles.container}>
      <Logo />

      <div className={styles.container_links}>
        {links.map((link) => (
          <Link key={link.link} href={link.link}>
            {t(link.title)}
          </Link>
        ))}
      </div>

      <div className={styles.container_auth}>
        <Button variant="outlined">{t('signIn')}</Button>
        <Button>{t('signUp')}</Button>
      </div>
    </header>
  );
};
