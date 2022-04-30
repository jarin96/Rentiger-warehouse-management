import useProducts from '../../../hooks/useProducts';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';
const Inventories = () => {

    const [inventory] = useProducts();
    return (
        <div className='inventory-info'>
            <div id='inventory' className='container'>
                <div className="row">
                    <h1 className='title mt-5'>Inventory</h1>
                    <div className="inventories-container">
                        {
                            inventory.slice(0, 6).map(inventory => <Inventory
                                key={inventory.id}
                                inventory={inventory}
                            ></Inventory>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventories;