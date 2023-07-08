type Props = {
  params: { lng: string };
};

export default function Home({ params: { lng } }: Props) {
  return <main>{lng}</main>;
}
