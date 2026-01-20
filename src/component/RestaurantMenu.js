import { useEffect } from "react";
const RestaurantMenu = () => {
  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/rest/123");
    console.log("Status:", data.status);
    console.log("OK:", data.ok);
    const text = await data.text()
    console.log("Data:", text);
  };
   useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Hello World REst</h1>
      <h3>North India, Kabab</h3>
      <h3>100 for Two</h3>
    </div>
  );
};

export default RestaurantMenu;
