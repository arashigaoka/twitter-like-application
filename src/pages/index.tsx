import Head from 'next/head';
import { Button } from '../components/atoms/Button';
import { Title } from '../components/atoms/Title';
import { SimpleList } from '../components/molecules/SimpleList';

export default function Top(): JSX.Element {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen">
        <Title label="This is my boilerplate. This boilerplate contains:" />
        <SimpleList
          labelList={['Next.js', 'TypeScript', 'Tailwind CSS', 'jest']}
        />
        <Button label="Click Me!" />
      </div>
    </>
  );
}
