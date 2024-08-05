const projects = {
  Parsley:{
    id: 1,
    "name": "Parsley",
    imgUrl: "./images/parsley.png",
    demoUrl:"https://parsley.cooking/demo",
    repoUrl:"https://github.com/StuFleisher/parsley-frontend",
    topline:"A Fullstack app powered by AI. Parse and reformat recipes to group ingredients with the steps in which they are used.",
    features: [
      "Convert text and images to formatted recipes",
      "Edit recipe data and upload custom images",
      "Store your favorite recipes in a cookbook",
      "Log into a demo account with credentials testUser / password",
    ],
    tools:[
      "Express",
      "TypeScript",
      "React",
      "SASS",
    ],
  },
  LarpCal:{
    id: 1,
    "name": "LARP Calendar",
    imgUrl: "./images/larpcal.png",
    demoUrl:"https://larpcal.demo.stufleisher.com/demo",
    repoUrl:"https://github.com/StuFleisher/LARP-Calendar",
    topline:"An event hub for Live Action Roleplaying games.",
    features: [
      "View upcoming events by country, tag, keyword and more",
      "Shared calendar for posting and planning events",
      "Multilevel auth enabling users, organizers and admin",
      "Full admin dashboard to view and manipulate site data",
    ],
    tools:[
      "Express",
      "TypeScript",
      "React",
      "SASS",
    ],
  },
  Jobly:{
    id: 2,
    "name": "Jobly",
    imgUrl: "./images/jobly.png",
    demoUrl:"https://jobly.demo.stufleisher.com",
    repoUrl:"https://github.com/StuFleisher/react-jobly",
    topline:"A job board app built with Nodejs, Express and React.",
    features: [
      "View a list of jobs or companies",
      "Filter results by keyword.",
      "Create and edit your user profile.",
    ],
    tools:[
      "PostgreSQL",
      "Express",
      "React",
      "Node",
    ],
    disclaimer:true,
  },
}

export default projects