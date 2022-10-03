import { useParams } from "react-router-dom";

const Project = ({ items }) => {
  const { id } = useParams();
  const project = items.filter(token => token.id == id)[0].name;

  return <h1>{project}</h1>;
};

export default Project;
