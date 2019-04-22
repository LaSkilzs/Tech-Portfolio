import React from "react";
import FrontCard from "../components/cards/FrontCard";
import BackCard from "../components/cards/BackCard";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      showButtons: false
    };
  }

  buttonHandler = () => {
    this.setState({ showButtons: !this.state.showButtons });
  };
  clickHandler = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    console.log(this.state);
    return (
      <div className="project-card">
        <div className="project-pic">
          {this.state.showDetails ? (
            <BackCard
              project={this.props.project}
              clickHandler={this.clickHandler}
              buttonHandler={this.buttonHandler}
              showButton={this.state.showButtons}
            />
          ) : (
            <FrontCard
              image={this.props.project.image}
              title={this.props.project.title}
              clickHandler={this.clickHandler}
              buttonHandler={this.buttonHandler}
              showButton={this.state.showButtons}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Card;
