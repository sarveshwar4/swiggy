const useSearch = (listOfRestaurants) =>{
    const [filteredList, setfilteredList] = useState(listOfRestaurants);
    const [SearchText, setSearchText] = useState("");

    useEffect(()=>{
        setfilteredList(listOfRestaurants);
    }, [listOfRestaurants]);
}