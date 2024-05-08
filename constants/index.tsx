export const projects = {
  webdesign: {
    text: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    projects: [
      {
        title: "express",
        text: "A multi-carrier shipping website for ecommerce businesses",
        img: "image-express.jpg"
      },
      {
        title: "TRANSFER",
        text: "Site for low-cost money transfers and sending money within seconds",
        img: "image-transfer.jpg"
      },
      {
        title: "PHOTON",
        text: "A state-of-the-art music player with high-resolution audio and DSP effects",
        img: "image-photon.jpg"
      },
      {
        title: "BUILDER",
        text: "Connects users with local contractors based on their location",
        img: "image-builder.jpg"
      },
      {
        title: "BLOGR",
        text: "Blogr is a platform for creating an online blog or publication",
        img: "image-blogr.jpg"
      },
      {
        title: "CAMP",
        text: "Get expert training in coding, data, design, and digital marketing",
        img: "image-camp.jpg"
      },
    ],
  },
  appdesign: {
    text: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    projects: [
      {
        title: "AIRFILTER",
        text: "Solving the problem of poor indoor air quality by filtering the air",
        img: "image-airfilter.jpg"
      },
      {
        title: "EYECAM",
        text: "Product that lets you edit your favorite photos and videos at any time",
        img: "image-eyecam.jpg"
      },
      {
        title: "FACEIT",
        text: "Get to meet your favorite internet superstar with the faceit app",
        img: "image-faceit.jpg"
      },
      {
        title: "TODO",
        text: "A todo app that features cloud sync with light and dark mode",
        img: "image-todo.jpg"
      },
      {
        title: "LOOPSTUDIOS",
        text: "A VR experience app made for Loopstudios",
        img: "image-loopstudios.jpg"
      },
    ],
  },
  graphicdesign: {
    text: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    projects: [
      {
        title: "TIM BROWN",
        text: "A book cover designed for Tim Brown’s new release, ‘Change’",
        img: "image-change.jpg"
      },
      {
        title: "BOXED WATER",
        text: "A simple packaging concept made for Boxed Water",
        img: "image-boxed-water.jpg"
      },
      {
        title: "SCIENCE!",
        text: "A poster made in collaboration with the Federal Art Project",
        img: "image-science.jpg"
      },
    ],
  },
};

export type projectsType = {
  webdesign: {
    text: string;
    projects: {
      title: string;
      text: string;
      img: string;
    }[];
  };
  appdesign: {
    text: string;
    projects: {
      title: string;
      text: string;
      img: string;
    }[];
  };
  graphicdesign: {
    text: string;
    projects: {
      title: string;
      text: string;
      img: string;
    }[];
  };
};
