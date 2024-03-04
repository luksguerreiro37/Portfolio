import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import imgDjango from "../public/static/img/django.png";
import imgTypeORM from "../public/static/img/typeorm.png";
import imgApi from "../public/static/img/api.png";
import imgStled from "../public/static/img/styled.png";
import imgExpress from "../public/static/img/express.png";

export const stackData = [
  {
    title: "API",
    img: imgApi,
  },
  {
    title: "Express js",
    img: imgExpress,
  },
  {
    title: "Styled Components",
    img: imgStled,
  },
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "TypeORM",
    img: imgTypeORM,
  },
  {
    title: "Django",
    img: imgDjango,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "React",
    img: FaReact,
  },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
];
