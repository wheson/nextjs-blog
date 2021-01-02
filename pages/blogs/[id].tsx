import Head from 'next/head'
import Layout from '../../components/layout'
import { Blogs, Blog, getAllBlogs, getBlog } from '../../lib/cms'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function BlogPage({ blog }: { blog: Blog }) {
  return (
    <Layout>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{blog.title}</h1>
        <div className={utilStyles.lightText}>
          <div>作成日: <Date dateString={blog.createdAt} /></div>
          <div>更新日: <Date dateString={blog.updatedAt} /></div>
          <div>カテゴリ: {blog.category.name}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.body}} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // CMSから全ブログデータを取得する
  const blogs: Blogs = await getAllBlogs()
  const paths = blogs.contents.map(blog => `/blogs/${blog.id}`)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // CMSからブログデータを取得する
  const blog: Blog = await getBlog(params.id)
  return {
    props: {
      blog
    }
  }
}
