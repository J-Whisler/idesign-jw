import {
  faRunning,
  faSun,
  faGamepad,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

export const ProjectData = [
  {
    id: 1,
    name: "Forest City Runs",
    subName: "Social Media/Blogging Application",
    icon: faRunning,
    description:
      "This is a full stack social media/blog site for the Cleveland running community.  It features a login and user authentication system that then allows users to share/delete posts and see other user's posts in which they can like or comment on any post.  Also able to unlike post and delete posts/comments that you made.  Also features a user profile page.",
    toolsUsed: [
      {
        toolName: "React",
        link: "https://reactjs.org/",
      },
      {
        toolName: "React-Router",
        link: "https://reactrouter.com/",
      },
      {
        toolName: "Sass",
        link: "https://sass-lang.com/",
      },
      {
        toolName: "Formik",
        link: "https://formik.org/",
      },
      {
        toolName: "Yup",
        link: "https://www.sanity.io/guides/form-validation-with-npm-yup",
      },
      {
        toolName: "Axios",
        link: "https://axios-http.com/docs/intro",
      },
      {
        toolName: "Express",
        link: "https://expressjs.com/",
      },
      {
        toolName: "MySQL",
        link: "https://www.mysql.com/",
      },
      {
        toolName: "Sequelize",
        link: "https://sequelize.org/",
      },
      {
        toolName: "bcrypt",
        link: "https://www.npmjs.com/package/bcrypt",
      },
    ],
    buttonLink: "https://fcruns.netlify.app/",
  },
  {
    id: 2,
    name: "Sunny",
    subName: "Weather Application",
    icon: faSun,
    description:
      "This is a basic weather application where users can enter the name of a city that they want to know the current weather for.  This app utilizes the Open Weather Api (link below) to return users the current temperature and weather conditions in their desired city.  Also features changing background color functionality based on the temperature in that city (orange if warmer, blue if colder).",
    toolsUsed: [
      {
        toolName: "HTML",
        link: "https://www.hostinger.com/tutorials/what-is-html",
      },
      {
        toolName: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS",
      },
      {
        toolName: "Javascript",
        link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
      },
      {
        toolName: "API's",
        link: "https://www.mulesoft.com/resources/api/what-is-an-api",
      },
      {
        toolName: "React-'State'-Management",
        link: "https://www.w3schools.com/react/react_state.asp",
      },
    ],
    buttonLink: "https://weather-jw.herokuapp.com/",
  },
  {
    id: 3,
    name: "Rock, Paper, Scissors",
    subName: "Simple Game",
    icon: faGamepad,
    description:
      "This is my version of the classic game 'Rock, Paper, Scissors'.  Users are able compete against a computer opponent to see how high of a score they can get!  Score 1 point every time you win, and lose 1 point every time you lose.  Users can also reset the score at any time.",
    toolsUsed: [
      {
        toolName: "CSS-Transitions",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
      },
      {
        toolName: "Framer-Motion",
        link: "https://www.framer.com/motion/",
      },
      {
        toolName: "React-Hooks",
        link: "https://reactjs.org/docs/hooks-intro.html",
      },
    ],
    buttonLink: "https://rock-paper-scissors-jw.herokuapp.com/",
  },
  {
    id: 4,
    name: "Netflix",
    subName: "Landing Page Recreation",
    icon: faTv,
    description:
      "This is a recreation I did of the classic Netflix landing page.  This is something similar to what users would see when they enter the Netflix app for the first time, before they have created an account.  This landing page features a functioning tab section with different information about Netflix on each tab, similar to what you might see on the actual Netflix app.",
    toolsUsed: [
      {
        toolName: "Styled-Components",
        link: "https://styled-components.com/",
      },
      {
        toolName: "JSX",
        link: "https://reactjs.org/docs/introducing-jsx.html",
      },
      {
        toolName: "Conditional-Rendering",
        link: "https://reactjs.org/docs/conditional-rendering.html",
      },
      {
        toolName: "Javascript-Event-Listeners",
        link: "https://www.w3schools.com/js/js_htmldom_eventlistener.asp",
      },
    ],
    buttonLink: "https://netflix-by-jw.herokuapp.com/",
  },
];
