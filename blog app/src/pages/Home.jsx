import React from 'react';
import BlogContainer from '../components/home_related/blog_container/BlogContainer';
import Sidebar from '../components/home_related/sidebar/Sidebar';

function Home() {
  return (
    <section className="wrapper">
      <Sidebar />
      <BlogContainer />
    </section>
  );
}

export default Home;
