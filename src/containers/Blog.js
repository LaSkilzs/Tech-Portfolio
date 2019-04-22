import React from "react";
import query from "../images/query.png";
import react from "../images/react.png";
import mobile from "../images/mobie.png";
import rails from "../images/rails.png";
import action from "../images/actioncable.png";
import next from "../images/next.jpg";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          image: query,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
          url:
            "https://medium.com/@lfountain123/creating-a-rails-api-query-param-cca186126035"
        },
        {
          id: 2,
          image: react,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
          url:
            "https://medium.com/@lfountain123/no-more-create-react-app-please-beacfdbc3ca2"
        },
        {
          id: 3,
          image: mobile,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
          url:
            "https://medium.com/@lfountain123/mobile-app-development-options-for-small-businesses-a69a42b7ce71"
        },
        {
          id: 4,
          image: rails,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
          url:
            "https://medium.com/@lfountain123/rspec-series-i-environment-setup-c9c84327cd40"
        },
        {
          id: 5,
          image: action,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
          url:
            "https://medium.com/@lfountain123/building-a-conceptual-model-design-6f88fa785235"
        },
        {
          id: 6,
          image: next,
          summary:
            "Nulla porttitor accumsan tincidunt.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
          url: ""
        }
      ]
    };
  }
  render() {
    return (
      <section id="blog">
        <div className="blog-container">
          <div className="title">
            <h1>BlogPosts</h1>
            <hr className="underline" />
          </div>
          <div className="blogs">
            {this.state.blogs.map(blog => {
              return (
                <div className="card blog-details" key={blog.id}>
                  <img src={blog.image} alt="blog preview" />
                  <p>{blog.summary}</p>
                  <a href={blog.url}>
                    <button className="blog-btn">see more</button>
                  </a>
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
