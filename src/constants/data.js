import images from "./images";

const Menu = [
  {
    text: "About us",
    link: "#team",
  },
  {
    text: "Services",
    link: "#services",
  },

  // {
  //   text: "Testimonials",
  //   link: "#testimonials",
  // },
  {
    text: "+91-9438141111",
    link: `tel:${+919438141111}`,
  },
];
const ServicesData = [
  {
    titleone: "Plots Available",
    // titletwo: "of Drones",
    link: "#",
    itemclass: "blight",
    imgURL: images.services01,
  },
  {
    titleone: "Flats Available",
    // titletwo: "and Unmatched Service",
    link: "#",
    itemclass: "bgreen",
    imgURL: images.services02,
  },
  {
    titleone: "Houses Available",
    // titletwo: "and Customer Satisfaction",
    link: "#",
    itemclass: "bdark",
    imgURL: images.services03,
  },
  {
    titleone: "Farmhouses Available",
    // titletwo: "and After Sales",
    link: "#",
    itemclass: "blight",
    imgURL: images.services04,
  },
];
const CaseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    link: "#",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    link: "#",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    link: "#",
  },
];

const WorkingProcess = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Implementation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Monitoring and Optimization",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Reporting and Communication",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Continual Improvement",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

const Team = [
  {
    name: "DJI Mini4 Pro",
    position: "CEO and Founder",
    info: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    foto: images.mini4,
    linkedin: "#",
  },
  {
    name: "DJI Mavic Mini",
    position: "Senior SEO Specialist",
    info: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    foto: images.mavic,
    linkedin: "#",
  },
  {
    name: "DJI Air 3",
    position: "PPC Manager",
    info: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    foto: images.air3,
    linkedin: "#",
  },
];

const Testimonials = [
  {
    name: "Sourav Rout",
    position: "Google Reviews",
    testimonial:
      '"I brought the mini pro 4 from them and what I loved about them is their price and service 👍"',
  },
  {
    name: "Binay Mallick",
    position: "Google Reviews",
    testimonial:
      '"Satisfied with my recent purchase.Competitive pricing. Undoubtedly the best in bhubaneswar"',
  },
  {
    name: "Tarunaditya Bhanja",
    position: "Google Reviews",
    testimonial:
      '"I recently purchased a DJI AIR 3, Initially was confused abt which one to buy looking at all YouTube videos. Thanks to Deba, helped me in choosing the drone according to my needs and budget. Loved his knowledge and professionalism. Finally a good drone place to buy in BBSR. Best in the city fr sure in terms of pricing and customer service."',
  },
  {
    name: "Sambhav Dash",
    position: "Google Reviews",
    testimonial:
      '"Outstanding service and unbeatable prices! Bought the DJI Mini 4 Pro here and couldn\'t be happier. They have all drones available in stock, including the DJI Air 3 and DJI Mavic Mini. Definitely the best drone dealer in Bhubaneswar, offering top-notch service and the best prices in town. Highly recommended!"',
  },
];
export default {
  Menu,
  CaseStudies,
  WorkingProcess,
  Team,
  Testimonials,
  ServicesData,
};
