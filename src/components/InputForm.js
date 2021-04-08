import styled from "styled-components/macro";
import { useItem } from "context/item-context";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function InputForm() {
	const [itemInput, setItemInput] = useState("");
	const { setListItems } = useItem();

	function handleAddItem(e) {
		e.preventDefault();
		setListItems((prev) => [
			...prev,
			{ id: uuidv4(), title: itemInput, status: "active" },
		]);
		setItemInput("");
	}

	return (
		<form
			onSubmit={handleAddItem}
			css={`
				padding: 1rem;
				border-bottom: solid 1px var(--color-border);
				display: flex;
			`}
		>
			<button
				type="button"
				css={`
					border: none;
					background: none;
					color: var(--color-primary--light);
				`}
			>
				<i className="fas fa-check"></i>
			</button>
			<input
				css={`
					border: none;
					background: none;
					font-family: inherit;
					flex: 1;
					padding: 0.5rem 1rem;
					font-size: 2.4rem;
					color: var(--color-primary);
					::placeholder {
						color: var(--color-primary--light);
					}
					&:focus {
						outline: none;
					}
				`}
				value={itemInput}
				onChange={(e) => setItemInput(e.target.value)}
				type="text"
				placeholder="What needs to be done?"
			/>
		</form>
	);
}

export default InputForm;
