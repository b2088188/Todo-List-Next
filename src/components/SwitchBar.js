import styled from "styled-components/macro";
import { SwitchButton, ClearButton } from "components/styles/Button";
import { useItem } from "context/item-context";

function SwitchBar() {
	const {
		listItems,
		setListItems,
		setSwitchList,
		showAll,
		showActive,
		showComplete,
	} = useItem();
	const hasOneChecked = listItems.some((el) => el.status === "complete");
	const leftItems = listItems.filter((el) => el.status === "active").length;
	return (
		<div
			css={`
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 1rem;
				font-size: 1.4rem;
			`}
		>
			<span>{leftItems} Items Left</span>
			<div>
				<SwitchButton showStyle={showAll}>All</SwitchButton>
				<SwitchButton showStyle={showActive}>Active</SwitchButton>
				<SwitchButton showStyle={showComplete}>Complete</SwitchButton>
			</div>
			<ClearButton
				onClick={() =>
					setListItems((prev) => prev.filter((el) => el.status !== "complete"))
				}
				showStyle={!hasOneChecked}
			>
				Clear Completed
			</ClearButton>
		</div>
	);
}

export default SwitchBar;
