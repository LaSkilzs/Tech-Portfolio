import React from "react";
import query from "../images/query.png";
import react from "../images/react.png";
import mobile from "../images/mobie.png";
import rails from "../images/rails.png";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          image: query,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        },
        {
          id: 2,
          image: react,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        },
        {
          id: 3,
          image: mobile,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        },
        {
          id: 4,
          image: rails,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
        }
      ]
    };
  }
  render() {
    return (
      <section id="blog">
        <div className="blog-container">
          <div className="title">
            <h1>Blogs</h1>
            <hr className="underline" />
          </div>
          <div className="blogs">
            {this.state.blogs.map(blog => {
              return (
                <div className="card" key={blog.id}>
                  <div className="image-top">
                    <img src={blog.image} alt="blog preview" />
                  </div>
                  <div className="card-content">
                    <p>{blog.summary}</p>
                  </div>
                  <button className="blog-btn">see more</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
