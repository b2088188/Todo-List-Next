import styled from "styled-components/macro";
import { useItem } from "context/item-context";
import { useState, useEffect } from "react";
import { DeleteButton } from "components/styles/Button";

function Item({ item }) {
	const { listItems, setListItems } = useItem();
	const listItem = listItems.find((el) => el.id === item.id);
	const [check, setCheck] = useState(
		listItem.status === "complete" ? true : false
	);

	useEffect(() => {
		setListItems((prev) => {
			return prev.map((el) => {
				if (el.id === item.id)
					return { ...el, status: check ? "complete" : "active" };
				return el;
			});
		});
	}, [check]);

	return (
		<li
			css={`
				border-bottom: solid 1px var(--color-border);
				font-size: 2.4rem;
				padding: 1rem;
			`}
		>
			<div
				css={`
					display: flex;
					align-items: center;
				`}
			>
				<input
					checked={check}
					onChange={() => setCheck((prev) => !prev)}
					type="checkbox"
					css={`
						margin-right: 1rem;
					`}
				/>
				<label
					css={`
						margin-right: auto;
						${check
							? `
text-decoration-line: line-through;
`
							: null}
					`}
				>
					{item.title}
				</label>
				<DeleteButton
					onClick={() =>
						setListItems((prev) => prev.filter((el) => el.id !== item.id))
					}
				>
					&times;
				</DeleteButton>
			</div>
		</li>
	);
}

export { Item };
