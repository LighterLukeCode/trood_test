import { useParams } from "react-router-dom";
import { Item } from "../interfaces/Item";
interface Props {
  items: Item[];
}

const Project = ({ items }: Props) => {
  const { id } = useParams();
  const project = items.filter(token => token.id === Number(id))[0].name;

  return <h1>{project}</h1>;
};

export default Project;
