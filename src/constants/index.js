import {
  worker1,
  worker2,
  worker3,
  interest1,
  interest2,
  interest3,
  facebook,
  instagram,
  linkedin,
  twitter,
  hacker,
  network,
  webdevelopment,
} from "../assets";

export const navLinks = [
  {
    id: "biography",
    title: "Biography",
  },
  {
    id: "experience",
    title: "Work experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "interests",
    title: "Interests and hobbies",
  },
];

export const experiences = [
  {
    id: "experience-1",
    icon: worker1,
    title: "Field Engineer",
    content:
      "In charge of provisioning and supporting the services (internet and others) contracted by clients.",
  },
  {
    id: "experience-2",
    icon: worker2,
    title: "Service Delivery Manager",
    content:
      "In charge of provisioning and supporting the services (internet and others) contracted by clients.",
  },
  {
    id: "experience-3",
    icon: worker3,
    title: "Solutions Analyst",
    content:
      "Ensure the experience of corporate clients through adequate management that guarantees compliance with installation times and the correct functioning of the services delivered.",
  },
];

export const interests = [
  {
    id: "interest-1",
    content:
      "I like to exercise physically and mentally, I have a sports routine in the gym, I go cycling, I like to read and play chess.",
    name: "Gym",
    img: interest1,
  },
  {
    id: "interest-2",
    content:
      "I like to learn new things every day and I want to always be updated.",
    name: "Learn",
    img: interest2,
  },
  {
    id: "interest-3",
    content:
      "I love listening to music and watching science fiction movies, especially those about time travel",
    name: "Music and movies",
    img: interest3,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Programming",
    icon: webdevelopment,
  },
  {
    id: "stats-2",
    title: "Networking",
    icon: network,
  },
  {
    id: "stats-3",
    title: "Cibersecurity",
    icon: hacker,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
