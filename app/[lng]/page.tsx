import { CallToAction } from './components';

type Props = {
  params: { lng: string };
};

export default function Home({ params: { lng } }: Props) {
  return (
    <main>
      <CallToAction lng={lng} />
    </main>
  );
}
