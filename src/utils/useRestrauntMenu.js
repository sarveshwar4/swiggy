import { useEffect } from "react";
const useRestrauntMenu = (resid) => {
    const [resInfo, setResInfo] = useState(null);
    const getResInfo = async () => {
        const data = await fetch("http://localhost:4000/rest/" + resid);
        // const json = await data?.json();
        // setResInfo(json);
    }
    useEffect(() => {
        getResInfo();
    }, []);
    return resInfo;
}

export default useRestrauntMenu;