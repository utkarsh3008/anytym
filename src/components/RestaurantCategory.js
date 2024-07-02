import ItemList from "./ItemList";

const RestaurantCategory = ({menuData , showItem , setShowItemIndex}) => {
const showItemList = () => {
    console.log(setShowItemIndex);
    setShowItemIndex()
}

    return (
        <div className="bg-gray-100 shadow-lg w-6/12 mx-auto my-6 p-2">
            <div className="flex justify-between cursor-pointer" onClick={showItemList}>
            <span className="font-bold text-lg">{menuData.title}({menuData?.itemCards?.length})</span>
            <span>⬇️</span>
            </div>
            {showItem && <ItemList item={menuData?.itemCards} />}
        </div>
    )
}

export default RestaurantCategory