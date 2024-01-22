import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { BsCodeSlash  } from "react-icons/bs";
import IMAGEONE from '../../images/IMAGEONE.png';
import IMAGETWO from "../../images/IMAGETWO.png";
import IMAGETHREE from "../../images/IMAGETHREE.png";
import IMAGEFOUR from "../../images/IMAGEFOUR.png";
import IMAGEFIVE from "../../images/IMAGEFIVE.png";
import "./portfolio.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Digital Clock",
    image: IMAGEONE,
    link: "https://digitalclock-beta.vercel.app/",
  },
  {
    id: 2,
    name: "Todo App",
    link: "https://todosowbi.netlify.app/",
    image: IMAGETWO,
  },
  {
    id: 2,
    name: "Spotify Clone-HTML",
    image: IMAGETHREE,
    link: "https://spotify-clone-iota-gold.vercel.app/",
  },
  {
    id: 2,
    name: "E-mart-REACT",
    image: IMAGEFOUR,
    link: "https://sowbi-mart.netlify.app/",
  },
  {
    id: 3,
    name: "Student-Dashboard",
    image: IMAGEFIVE,
    link: "https://student-dashboard-sowbi.vercel.app/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Front-End",
  },
  {
    filterId: 3,
    label: "Back-End",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
   

    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsCodeSlash  size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              {index === hoveredValue && (
                <div className="overlay">
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button>Visit</button>
                    </a>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;