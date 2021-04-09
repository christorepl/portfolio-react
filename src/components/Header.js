import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <div className="row banner">
            <div className="banner-text">
              <h1
                className="responsive-headline"
                style={{ color: "black", fontFamily: "sans-serif " }}
              >
                {resumeData.name}
              </h1>
              <h3 style={{ color: "black", fontFamily: "sans-serif " }}>
                {resumeData.role}. {resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={item.className}
                            style={{ color: "black" }}
                          />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" style={{ color: "black" }} />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
