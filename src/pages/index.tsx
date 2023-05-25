import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Frame } from '@/containers';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
        <Frame />
      </main>
    </React.Fragment>
  );
}
