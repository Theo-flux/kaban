import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Frame } from '@/containers';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanban - Task Manager</title>
        <meta
          name="description"
          content="Kanban is a task management app that helps organise your tasks, activities in a single place."
        />
      </Head>
      <main>
        <Frame />
      </main>
    </>
  );
}
