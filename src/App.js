import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Featured from "./components/Featured";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const projects = [
    {
      title: "yewtube",
      description:
        "Terminal based YouTube player and downloader. No Youtube API key required.",
      url: "https://github.com/iamtalhaasghar/yewtube",
      thumbnailUrl:
        "https://camo.githubusercontent.com/2bdb32d8ce0fe865d97cdb32a090d9492ca952b4c293093148c2006cf8f2db15/687474703a2f2f6d70732d796f75747562652e6769746875622e696f2f796577747562652f7374642d7365617263682e706e67",
    },
    {
      title: "Twitter Bot Detector",
      description:
        "Twitter Bot or Not: Twitter bot detection with supervised machine learning models ",
      url: "https://github.com/iamtalhaasghar/twitter-bot-detection_scrapfishies",
      thumbnailUrl:
        "https://www.shutterstock.com/image-vector/twitter-social-media-bird-logo-600w-2227542221.jpg",
    },
    {
      title: "Ebook Tracker",
      description:
        "A simple cli program to track ebooks which you've read so far.",
      url: "https://github.com/iamtalhaasghar/ebook-tracker",
      thumbnailUrl:
        "https://www.shutterstock.com/image-vector/computer-book-knowledge-base-concept-600w-1161966886.jpg",
    },
    {
      title: "Banking Management System",
      description:
        "A desktop for bank sector which enables customer to manage their bank account, do online transactions, pay utility bills and many more.",
      url: "https://github.com/iamtalhaasghar/banking-management-system-using-javafx",
      thumbnailUrl:
        "https://www.shutterstock.com/image-vector/internet-banking-app-mobile-phone-600w-1751381474.jpg",
    },
    {
      title: "Time table scheduler",
      description:
        "A complete system for educational institutes to schedule classes / generate timetable at an institutional level.",
      url: "https://github.com/iamtalhaasghar/smart-time-table-scheduler",
      thumbnailUrl:
        "https://www.shutterstock.com/image-vector/school-timetable-weekly-classes-schedule-600w-1422962420.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <Intro
        name="Talha Asghar"
        description="I am learning front-end development specialization by Meta"
      />
      <Featured projects={projects} />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
