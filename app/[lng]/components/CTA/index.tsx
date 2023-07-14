import { getTranslation } from '@/app/i18n';
import { Button } from '@/components/shared';
import Image from 'next/image';
import styles from './styles.module.css';

type Props = {
  lng: string;
};

export const CallToAction = async ({ lng }: Props) => {
  const { t } = await getTranslation(lng, 'cta');

  return (
    <section className={styles.container}>
      <div className={styles.container_description}>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <Button colorScheme="secondary">{t('buttonTitle')}</Button>
      </div>
      <Image
        src="/assets/landing/stretchingWoman.png"
        alt="Stretching"
        width={604}
        height={498}
      />
    </section>
  );
};
