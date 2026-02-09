import { useEffect, useState } from "react";
const useRestrauntMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const getResInfo = async () => {
        const data = await fetch("https://dummyjson.com/recipes");
        const json = await data?.json();
        setResInfo(json.recipes);
    }
    useEffect(() => {
        getResInfo();
    }, []);
    return resInfo;
}

export default useRestrauntMenu;