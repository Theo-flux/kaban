import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Frame } from '@/containers';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const inter = Inter({ subsets: ['latin'] });

type TCollections = {
  name: String;
  collections: Array<String>;
};

export default function Home({
  boardCollections,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(boardCollections);

  return (
    <React.Fragment>
      <Head>
        <title>Kanban - Task Manager</title>
        <meta
          name="description"
          content="Kanban is a task management app that helps organise your tasks, activities in a single place."
        />
      </Head>
      <main>
        <Frame boardCollections={boardCollections} />
      </main>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps<{
  boardCollections: TCollections;
}> = async () => {
  const res = await fetch('https://thekanban.vercel.app/api/boards');
  const boardCollections = await res.json();
  return { props: { boardCollections } };
};
