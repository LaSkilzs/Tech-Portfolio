import React from 'react';

const  Blog = (props) => {
  return (
    <section id="blog">
      <div className="blog-container">
      <div className="title"><h1>Blogs</h1></div>
      <hr/>
      <div className="blogs">Blog Grid</div>
        <div className="card">
          <div className="image-top">
          <img src="" alt="blog preview"/>
          </div>
          <div className="card-content">
          <p>Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget
           consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget
           tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
           sed, convallis at tellus.</p>
          </div>
          <button>see more</button>
        </div>
      </div>
  </section>
  )
}

export default Blog;
