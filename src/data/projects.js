const projects = {
  Parsley:{
    id: 1,
    "name": "Parsley",
    imgUrl: "./images/parsley.png",
    demoUrl:"https://parsley.cooking",
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
  Warbler:{
    id: 3,
    "name": "Warbler",
    imgUrl: "./images/warbler.png",
    demoUrl:"https://warbler.demo.stufleisher.com",
    repoUrl:"https://github.com/StuFleisher/warbler",
    topline:"A microblogging app to served from a Flask back-end",
    features: [
      "Create, Read, or Delete messages",
      "Follow users to see their messages in your feed",
      "Search users by username",
      "Like messages and view your likes",
      "Edit or delete profile information",
    ],
    tools:[
      "PostgreSQL",
      "Flask",
      "SQLAlchemy",
      "Python",
    ],
    disclaimer:true,
  },
}

export default projects