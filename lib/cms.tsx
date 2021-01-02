// CMS接続のための設定値
const cmsHost = process.env.CMS_HOST
const key = {
  headers: {'X-API-KEY': process.env.CMS_API_KEY}
}

// 全ブログデータ型
export interface Blogs {
  contents: Blog[],
  totalCount: number,
  offset: number,
  limit: number
}

// ブログデータ型
export interface Blog {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  category: Category
  body: string
}

// カテゴリ型
export interface Category {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

/**
 * CMSから全ブログデータを取得する
 * 
 * @return ブログデータの配列
 */
export async function getAllBlogs() {
  const res = await fetch(cmsHost + `/api/v1/blog`, key)
  return res.json()
}

/**
 * CMSから指定したIDのブログデータを取得する
 * 
 * @param id ブログのID
 * @return ブログデータ
 */
export async function getBlog(id: string) {
  const res = await fetch(cmsHost + `/api/v1/blog/${id}`, key)
  return res.json()
}