import houseSVG from '../../assets/svgs/house.svg'
import svg5 from '../../assets/svgs/5_1.svg'
import svg4 from '../../assets/svgs/5.svg'
import svg1 from '../../assets/svgs/Rating=1.svg'
import man from '../../assets/svgs/man.svg'
import woman from '../../assets/svgs/woman.svg'

const servicesProfiles = [
  {
    image: man,
    name: "esther howard",
    service: "cleaner",
    stars: svg5,
    profile: "view profile",
    profileLink: "profile",
    message: "message",
  },
  {
    image: man,
    name: "Jacob Jones",
    service: "painter",
    stars: svg1,
    profile: "view profile",
    message: "message",
  },
  {
    image: man,
    name: "guy hawkings",
    service: "generator repair",
    stars: svg5,
    profile: "view profile",
    message: "message",
  },
  {
    image: man,
    name: "jerome bell",
    service: "plumber",
    stars: svg5,
    profile: "view profile",
    message: "message",
  },
  {
    image: man,
    name: "Tobi Onoh",
    service: "Electrician",
    stars: svg4,
    profile: "view profile",
    message: "message",
  },
  {
    image: man,
    name: "tochukwu mmadu",
    service: "pest control",
    stars: svg5,
    profile: "view profile",
    message: "message",
  },
  {
    image: man,
    name: "ibrahim dauda",
    service: "solar installator",
    stars: svg5,
    profile: "view profile",
    message: "message",
  },
  {
    image: woman,
    name: "esther akali",
    service: "home security system",
    stars: svg5,
    profile: "view profile",
    message: "message",
  },
];

const listOfServices = [
  {
    name: "Cleaning",
    icon: houseSVG,
    to: "cleaning",
  },
  {
    name: "Plumbing",
    icon: houseSVG,
    to: "plumbing",
  },
  {
    name: "electrical",
    icon: houseSVG,
    to: "electrical",
  },
  {
    name: "appearance repair",
    icon: houseSVG,
    to: "appearance-repair",
  },
  {
    name: "handyman",
    icon: houseSVG,
    to: "handyman",
  },
  {
    name: "tree trimming",
    icon: houseSVG,
    to: "tree-trimming",
  },
  {
    name: "painting",
    icon: houseSVG,
    to: "painting",
  },
  {
    name: "roofing",
    icon: houseSVG,
    to: "roofing",
  },
  {
    name: "local moving",
    icon: houseSVG,
    to: "local-moving",
  },
];

export default {servicesProfiles, listOfServices}