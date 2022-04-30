import { useEffect, useState } from "react";


const useProducts = () => {

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);

    return [inventory, setInventory];
}
export default useProducts;