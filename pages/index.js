import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import BlogCard from '../components/blogCard';

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='p-0'>To obtain a position that allows me to utilize my skills in an
environment where they would be advantageous to both the
client and myself. My commitment to perform quality work is
my greatest asset. I have strong problem solving, critical thinking &
interpersonal communication abilities with good learning aptitude
seeking challenging opportunity to further enhance and develop my
skills. I am confident, creative & enthusiastic and enjoy taking
up challenging tasks as well as work under pressure while delivering
on time and within budget performance</p>
        ''
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className="grid sm:grid-flow-col grid-flow-row">
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
         
            <br />

            <BlogCard date={date} title={title} id={id}/>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}