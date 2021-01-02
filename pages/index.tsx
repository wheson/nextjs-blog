import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Blogs, Blog, getAllBlogs } from '../lib/cms'
import Date from '../components/date'

export default function Home({ blogs }: { blogs: Blog[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Profile</h2>
        <p>Web企業で働いているどこにでもいる人</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {blogs.map((blog: Blog) => (
            <li className={utilStyles.listItem} key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <div>作成日: <Date dateString={blog.createdAt} /></div>
                <div>更新日: <Date dateString={blog.updatedAt} /></div>
                <div>カテゴリ: {blog.category.name}</div>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // CMSから全ブログデータを取得する
  const blogs: Blogs = await getAllBlogs()
  return {
    props: {
      blogs: blogs.contents,
    }
  }
}
