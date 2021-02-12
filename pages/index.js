import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Tried to develop a mobile application, loved it and now I even work
          with it...
          <br />
          On the frontend I have knownledge with Angular 6, Angular 8, ReactJS
          and Flutter.
          <br />
          On the backend I have knownledge with Spring Boot, Hibernate, Maven
          and MySQL database.
          <br />
          <br />
          Developed a Administrative System in one year and a half using Angular
          6 and Typescript. Developed a small project in 5 months with Flutter
          and Dart. My past experience with Angular 8 and ReactJS were build for
          learning purposes and to embrace open-source projects there are
          available on my <Link href="https://github.com/LucasHBG">GitHub</Link>
          .
          <br />
          I've already worked as Fullstack developer using Java and frameworks
          Spring, Hibernate and Maven during the development of the
          administrative system already mentioned above.
        </p>
      </section>

      {/* Section with posts sorted by date */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default Home;
