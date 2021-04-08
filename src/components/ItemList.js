import { Item } from "components/Item";
import { useItem } from "context/item-context";

function ItemList({ filterFn }) {
	const { listItems } = useItem();

	const filteredItems = filterFn ? listItems.filter(filterFn) : listItems;
	return filteredItems.map((el) => {
		return <Item key={el.id} item={el} />;
	});
}

export default ItemList;
