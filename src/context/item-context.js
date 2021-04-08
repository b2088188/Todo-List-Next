import { createContext, useContext, useState, useMemo } from "react";

const ItemContext = createContext();
ItemContext.displayName = "ItemContext";

function ItemProvider({ children }) {
	const [listItems, setListItems] = useState([]);
	const [switchList, setSwitchList] = useState("all");
	const showAll = switchList === "all";
	const showActive = switchList === "active";
	const showComplete = switchList === "complete";

	const value = useMemo(
		() => ({
			listItems,
			setListItems,
			showAll,
			showActive,
			showComplete,
			setSwitchList,
		}),
		[listItems, showAll, showActive, showComplete]
	);
	return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}

function useItem() {
	const context = useContext(ItemContext);
	if (!context) throw new Error("useItem must be wrapped in ItemProvider");
	return context;
}

export { ItemProvider, useItem };
