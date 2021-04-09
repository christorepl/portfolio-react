const portfolioItems = [
  {
    name: "CovidPovertyLink",
    description:
      "A front end app with API calls. Enables users to research and compare the COVID-19 rates and poverty rates of US states. Users can select one or more US states and view data related to poverty and COVID-19 rates.",
    liveAppLink: "https://christorepl.github.io/CovidPovertyLink/",
    appRepoLink: "https://github.com/christorepl/CovidPovertyLink",
    screenshotURL:
      "https://raw.githubusercontent.com/christorepl/CovidPovertyLink/master/screenshots/screen1.png",
    altText: "screenshot displaying search results of the app",
    frontEndTech: "HTML, CSS, Javascript, jQuery",
  },
  {
    name: "Get it to the Table",
    description: `Get it to the Table is like Tinder for board games. No more arguing over what game to play or what new game to buy! Users swipe on games imported from Board Game Atlas lists. Inspired by constant bickering and disagreeing over which game to play or buy.`,
    liveAppLink: "https://get-it-to-the-table.vercel.app/home",
    appRepoLink: "https://github.com/christorepl/gittt-client",
    serverRepoLink: "https://github.com/christorepl/get-it-to-the-table-server",
    screenshotURL:
      "https://raw.githubusercontent.com/christorepl/gittt-client/main/src/img/swiping.gif",
    altText: "gif screencap of app that shows a user swiping on games",
    frontEndTech: "CSS, Javascript, React, JSX, Vercel, npm",
    backEndTech: "node.js, PostgreSQL, Heroku, npm",
  },
  {
    name: "Food Justice Now",
    description:
      "Food Justice Now allows users to inspect racial demographics, 2020 election results, poverty, food insecurity, and COVID-19 rates. Has visual aids in the form of charts and a page devoted to encouraging users to learn more about the surrounding issues and take action.",
    liveAppLink: "https://food-justice-now.vercel.app/home",
    appRepoLink: "https://github.com/christorepl/food-deserts",
    serverRepoLink: "https://github.com/christorepl/food-desert-api",
    screenshotURL:
      "https://raw.githubusercontent.com/christorepl/food-deserts/main/src/imgs/fjn.gif",
    altText: "gif screencap of app showing a search and charts from results",
    frontEndTech: "CSS, Javascript, React, JSX, Vercel, npm",
    backEndTech: "node.js, PostgreSQL, Heroku, npm",
  },
];

function Projects(props) {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      {portfolioItems.map((item) => {
        return (
          <div className="project">
            <h2>{item.name}</h2>
            <img
              src={item.screenshotURL}
              alt={item.altText}
              className={item.name}
            />
            <br />
            <span>
              <a
                href={item.liveAppLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live App{" "}
              </a>{" "}
              -
              <a
                href={item.appRepoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Client Repo{" "}
              </a>
              {item.serverRepoLink ? (
                <>
                  -
                  <a
                    href={item.serverRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Server Repo
                  </a>
                </>
              ) : (
                <></>
              )}
            </span>
            <p>{item.description}</p>
            <p>Front End Tech: {item.frontEndTech}</p>
            {item.backEndTech ? (
              <p>Back End Tech: {item.backEndTech}</p>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
