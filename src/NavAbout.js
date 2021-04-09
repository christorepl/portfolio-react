function NavAbout() {
  return (
    <div class="nav-about">
      <h1>Chris O'Brien</h1>
      <h2>Software Developer</h2>
      <nav>
        <ul class="group">
          <div class="item">
            <li>
              <a
                href="https://www.linkedin.com/in/christopheredwardobrien"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </div>
          <div class="item">
            <li>
              <a
                href="https://github.com/christorepl"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </div>
          <div class="item">
            <li>
              <a href="mailto:chrisobrien416@gmail.com">Email</a>
            </li>
          </div>
        </ul>
      </nav>
      <div className="about-me">
        <p>
          As a developer with a strong background in hospitality and growing
          concern for the prosperity of the world around me, I hope to work with
          on a team that centers goals of economic or social justice. Any
          position that would draw inspiration from my personal interests would
          also be of great interest. In my personal life I enjoy cooking,
          tabletop games, analyzing data, building computers, cats, fermented
          food and drink, roller skating, ice skating, hiking, gardening, and
          other outdoor activities.
        </p>
        <h3>Current Tech Stack:</h3>
        <p>
          ReactJS, Javascriptt, jQuery, node.js, RESTful API, Express,
          PostgreSQL, AJAX, HTML, CSS, Heroku, Vercel, git/github, Unix,
          Windows, Microsoft Office, Google Suite, npm
        </p>
      </div>
    </div>
  );
}

export default NavAbout;
