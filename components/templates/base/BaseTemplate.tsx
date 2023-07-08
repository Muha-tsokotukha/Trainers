import styles from './BaseTemplate.module.css';

export type Props = {
  sampleTextProp: string;
};

const BaseTemplate: React.FC<Props> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
