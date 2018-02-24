import React from 'react';

import ArticleList from '../blog/ArticleList';

const BlogPage = () => {
  return (
    <div className="container main blog animated animatedFadeInUp fadeInUp">
      <section className="column small-12">
        <h1>Blog</h1>
        <ArticleList />
      </section>
    </div>
  )
}
export default BlogPage;