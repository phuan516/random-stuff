/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import React from "react";

import styles from "../../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Random Stuff</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <p className="font-bold text-2xl">Hi 👋, I&apos;m Peter</p>
          <p className="font-bold text-xl">
            A Computer Science and Business Student passionate about front-end
            development
          </p>
          <p className="mt-2">
            - 🌱 I&apos;m currently learning: Godot, Svelte, Python
          </p>
          <p className="mt-2">- 📫 How to reach me: phuan516@mtroyal.ca</p>
          <p className="mt-2">
            - 📄 Know about my experiences:&nbsp;
            <a href="https://peterhuang.vercel.app/Peter%20Huang%20-%20Resume.pdf">
              Resume
            </a>
          </p>
          <p className="mt-2">
            - ⚡ Fun fact: Once I got 3 speeding tickets in one afternoon
          </p>
          <p className="font-bold text-xl my-4">Languages and Tools:</p>
          <p className="flex flex-row justify-evenly w-full">
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                alt="docker"
                width={40}
                height={40}
              />
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width={40}
                height={40}
              />
            </a>
            <a href="https://cloud.google.com" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                alt="gcp"
                width={40}
                height={40}
              />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width={40}
                height={40}
              />
            </a>
            <a href="https://graphql.org" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                alt="graphql"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.java.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="java"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width={40}
                height={40}
              />
            </a>
            <a href="https://jestjs.io" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                alt="jest"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width={40}
                height={40}
              />
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
                width={40}
                height={40}
              />
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.php.net" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                alt="php"
                width={40}
                height={40}
              />
            </a>
            <a href="https://www.python.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width={40}
                height={40}
              />
            </a>
            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://reactnative.dev/img/header_logo.svg"
                alt="reactnative"
                width={40}
                height={40}
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width={40}
                height={40}
              />
            </a>
          </p>
          <picture className="flex flex-row mt-4">
            <img
              className="mr-4"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=phuan516&show_icons=true&locale=en&layout=compact"
              alt="phuan516"
              height="165"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=phuan516&"
              alt="phuan516"
              height="165"
            />
          </picture>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  );
}
