// []同时获取多级路由参数
// [[]] 则让这些参数可选，也就是没有后面的路由，也不会出错
import React from 'react'
interface Props {
  params: {
    slug: string[];
  };
  searchParams: { sortOrder: string}
}
const ProductPage = ({ params: { slug }, searchParams: { sortOrder }}: Props) => {
  return (
    <div>
      ProductPage - 
      <ul>
        {slug && slug.map(item => <li key={item}>{item}</li>)}
      </ul>
      <div>sortOrder: {sortOrder}</div>

    </div>
  )
}

export default ProductPage