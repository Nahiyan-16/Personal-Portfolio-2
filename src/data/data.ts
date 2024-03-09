import dashboardImg from "../images/dashboard.png";
import webCrawlerImg from "../images/webCrawler.png";
import planYourDayImg from "../images/PlanYourDay.png";
import nanotronicsImg from "../images/Nanotronics.jpg";

export default {
  introduction: "Hi there! I'm Nahiyan a Web Developer",
  introAbout:
    "I'm extremely passionate about creating and delivering interactive applications along with a smooth user web experiences",
  project1: {
    title: "Plan Your Day",
    shortDesc: "A personalized planning web application",
    description: [
      "Plan Your Day is a web application developed with React for the front end, backed by Node.js, and utilizes MongoDB for database storage. With a cloud-based architecture, users can securely plan their day and access their schedules from anywhere, ensuring a seamless and consistent planning experience",
      "The app offers an intuitive and user-friendly interface, allowing individuals to efficiently plan their entire day's activities. Leveraging the power of React, the frontend provides a dynamic and responsive experience, while the backend, built with Node.js, ensures efficient data handling and processing",
      "Plan Your Day incorporates secure user authentication to safeguard personal schedules. With login credentials, users can access their planned activities securely from any device, enabling them to stay organized and on track with their daily tasks. The integration of MongoDB ensures robust data storage and retrieval capabilities, making the planning process reliable and accessible",
    ],
    link: "https://github.com/Nahiyan-16/PlanYourDayApp",
    image: planYourDayImg,
  },
  project2: {
    title: "nAnalysisConverter",
    shortDesc: "A C++ and MFC application designed to update databases",
    description: [
      "Developed a standalone C++ and MFC application independently within an efficient 3-week timeframe. Utilized SQLite3 for robust database management and conducted comprehensive edge case testing to maintain high quality.",
      "Innovated the parameter group updating process in nSpec, enabling mass updates of parameters and their dependencies, enhancing time efficiency by 60 percent.",
      "Implemented precise validation methods to ensure user input accuracy, including checks for the presence of selected file types in the system and validation of inputs against defined ranges. This application significantly reduces the time required for tech services, converting a previously time-consuming manual process from minutes to seconds.",
    ],
    link: "",
    image: nanotronicsImg,
  },
  project3: {
    title: "Personal Dashboard",
    shortDesc: "A customizable dashboard made to enliven the user experience",
    description: [
      "Designed and implemented user friendly personalized dashboard using HTML/ CSS/ JavaScript",
      "Configured the app to utilize three different APIs (Unsplash, OpenWeatherMap & GreetingsAPI) to asynchronously bring in stunning images, current weather, and random greetings from all over the world",
      "Implemented a method in which the user can add or remove bookmarks in local storage which can be accessed when the user returns",
    ],
    link: "https://nahiyans-dashboard.netlify.app/",
    image: dashboardImg,
  },
  project4: {
    title: "Web Crawler",
    shortDesc: "A java application created to gather images from websites",
    description: [
      "A web crawler written in Java that uses the programming language Java to navigate through the pages of a website, gathering images.",
      "The app follows links from one page to another, and can be configured to only visit certain types of pages, or to exclude certain types of pages.",
      "Additionally, it is also often possible to set the level of depth to which the crawler should traverse the site, i.e how many links from the start URL should it follow.",
    ],
    link: "https://github.com/Nahiyan-16/Web-Crawler",
    image: webCrawlerImg,
  },
  about: {
    text: "My name is Nahiyan, and I am currently working as a Full Stack Developer and Manager in Training at One Community Global, a non-profit organization. I am primarily focused on developing the Highest Good Network application, a collaborative platform for various organizations. Utilizing the MERN stack, I contribute to the development and maintenance of this project. With a degree in Computer Science from Queens College, I possess a robust skill set in web development, including proficiency in JavaScript, Java, C++, and ReactJS. My experiences at Nanotronics Imaging and during my college years have equipped me with hands-on expertise in both individual and team-based projects, fostering a deep understanding of web development principles. I excel in front-end development, with a solid grasp of JavaScript and ReactJS, as well as backend development, with proficiency in Java and C++. Eager to continue learning and adapting to emerging technologies, I am enthusiastic about taking on new challenges and making significant contributions to any team I join.",
  },
  contactTitle: "Hit me up!",
  contactSubtext: "Get in touch with me",
};
