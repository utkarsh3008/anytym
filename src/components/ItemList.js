import { RES_IMG_CDN_URL } from "../utils/constants";

const ItemList = (props) => {
    return (
<div>
   {props.item.map((item) => {
       return (
        <div key={item?.card?.info?.id} className="bg-white p-4 rounded-lg shadow-lg w-auto-md mx-auto my-3">
        <div className="flex items-start">
           
            <div className="ml-4 flex-1 justify-start w-9/12">
                <h2 className="text-lg font-bold text-left">{item?.card?.info?.name}</h2>
                <p className="text-sm text-gray-600 text-left font-bold">₹ {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</p>
                
                <p className="text-sm  mt-2 text-left color text-gray-400">
                    {item?.card?.info?.description}
                </p>
            </div>
             <div className="flex-shrink-0 m-4">
                <img src={RES_IMG_CDN_URL + item?.card?.info?.imageId} alt="Momos" className="h-32 w-40 rounded" />
                            <button className="bg-green-500 text-white px-3 py-1 my-[-10px] rounded hover:bg-green-600 absolute font-bold shadow-lg">ADD +</button>

            </div>
        </div>
        
    </div>
       )
   })}
</div>
    )
};

export default ItemList;