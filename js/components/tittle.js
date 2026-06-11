const titles = [
    {
      h2: "Services",
      p: "At our digital marketing agency, we offer a range of services to help businesses \n    grow and succeed online. These services include:",
    },
    {
      h2: "Our Products",
      p: "Explore Real-Life \n    Examples of Our Proven Digital Marketing Success through Our Case Studies",
    },
    {
      h2: "Our Working Process",
      p: "Step-by-Step Guide to Achieving Your Business Goals",
    },
    {
      h2: "Team",
      p: "Meet the skilled and experienced team behind our successful digital marketing strategies",
    },
    {
      h2: "Testimonials",
      p: "Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services",
    },
    {
      h2: "Contact Us",
      p: "Connect with Us: Let's Discuss Your Digital Marketing Needs",
    },
  ],
  classElement = document.querySelectorAll(".title__item");
titles
  .map((e, s) => {
    classElement[s].innerHTML = `\n    <h2>${e.h2}</h2>\n    <p>${e.p}</p>\n  `;
  })
  .join("");
export default titles;
