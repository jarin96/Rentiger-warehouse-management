import { useEffect, useState } from "react";


const useProducts = () => {

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://protected-dusk-73186.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);

    return [inventory, setInventory];
}
export default useProducts;