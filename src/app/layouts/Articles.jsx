import React from 'react'
import ArticleCard from '../components/ArticleCard'

const Articles = () => {
  return (
    <div>
      <h2 className='flex justify-center mt-6 font-bold text-2xl'>All articles</h2>
      <div className='sm:flex m-auto flex-wrap justify-center max-w-3xl space-x-3'>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  )
}

export default Articles