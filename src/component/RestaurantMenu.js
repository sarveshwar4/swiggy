import useRestrauntMenu from "../utils/useRestrauntMenu";
import { useParams } from "react-router";
const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);
  const info = useRestrauntMenu("123");
  return (
    <div>
      <h1>Hello World REst</h1>
      <h3>North India, Kabab</h3>
      <h3>100 for Two</h3>
    </div>
  );
};

export default RestaurantMenu;
