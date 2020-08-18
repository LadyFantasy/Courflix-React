import React from "react";
import "./index.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>
          Made with <span className="heart">❤ </span>by
          <a href="https://github.com/LadyFantasy">
            <span className="heart"> Sole</span>
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
