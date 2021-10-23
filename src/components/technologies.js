import React from "react";

import WebpackIcon from "../icons/icons8-webpack.svg";
import FireStoreIcon from "../icons/icons8-cloud-firestore.svg";
import CSS3Icon from "../icons/icons8-css3.svg";
import DjangoIcon from "../icons/icons8-django.svg";
import FireBaseIcon from "../icons/icons8-firebase.svg";
import GitIcon from "../icons/icons8-git.svg";
import HTML5Icon from "../icons/icons8-html-5.svg";
import JavascriptIcon from "../icons/icons8-javascript.svg";
import NodeIcon from "../icons/icons8-nodejs.svg";
import PostgreSQLIcon from "../icons/icons8-postgresql.svg";
import PythonIcon from "../icons/icons8-python.svg";
import ReactIcon from "../icons/icons8-react.svg";
import SassIcon from "../icons/icons8-sass.svg";
import MongoDBIcon from "../icons/icons8-mongodb.svg";
import ExpressIcon from "../icons/expressjs.svg";
import AWSIcon from "../icons/icons8-amazon-web-services.svg";

const icons = {
  WebpackIcon,
  FireStoreIcon,
  CSS3Icon,
  DjangoIcon,
  FireBaseIcon,
  GitIcon,
  HTML5Icon,
  JavascriptIcon,
  NodeIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  MongoDBIcon,
  ExpressIcon,
  AWSIcon,
};

const TECHS = [
  {
    type: "Programming",
    kinds: ["Python", "Javascript"],
  },
  {
    type: "Runtime Envs",
    kinds: ["Node"],
  },
  {
    type: "Libraries",
    kinds: ["React", "Framer-Motion"],
  },
  {
    type: "Frameworks",
    kinds: ["Django", "Express"],
  },
  {
    type: "Databases",
    kinds: ["MongoDB", "PostgreSQL", "FireStore"],
  },
  {
    type: "Design",
    kinds: ["Sass", "CSS3", "HTML5"],
  },
  {
    type: "Other",
    kinds: ["Webpack", "FireBase"],
  },
  {
    type: "Cloud",
    kinds: ["AWS"],
  },
];

const TYPES_TO_FILTER = [
  "Programming",
  "Runtime Env",
  "Libraries",
  "Frameworks",
  "Databases",
];

const Technologies = ({ filterTech }) => (
  <div className="technologies">
    <h2>Technologies</h2>
    <div className="techs-container glow-border-purple">
      {TECHS.map(({ type, kinds }) => {
        const filterKind = TYPES_TO_FILTER.includes(type);

        return (
          <div className={type + " techs"} key={type}>
            <h3>{type}</h3>
            <ul>
              {kinds.map((kind) => (
                <li key={kind}>
                  {icons[kind + "Icon"] && (
                    <img src={icons[kind + "Icon"]} alt="" className="icon" />
                  )}
                  <span onClick={() => filterKind && filterTech(kind)}>
                    {kind}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </div>
);

export { Technologies };
