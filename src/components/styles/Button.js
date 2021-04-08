import styled from "styled-components/macro";
import { useItem } from "context/item-context";

function ThemeButton({ children, ...props }) {
	return (
		<button
			{...props}
			css={`
				background: none;
				border: none;
				color: #ffe600;
				position: absolute;
				padding: 1rem;
				font-size: 1.7rem;
				&:hover {
					cursor: pointer;
				}
				&:focus {
					outline: none;
				}
			`}
		>
			{children}
		</button>
	);
}

function SwitchButton({ children, showStyle }) {
	const { setSwitchList } = useItem();
	return (
		<button
			onClick={() => setSwitchList(children.toLowerCase())}
			css={`
				padding: 0.25rem 1rem;
				color: var(--color-primary);
				border: none;
				background: none;
				${showStyle
					? `
							border: solid 1px var(--color-border);
							`
					: null}
				&:hover {
					cursor: pointer;
					border: solid 1px var(--color-border);
				}
				&:focus {
					outline: none;
				}
			`}
		>
			{children}
		</button>
	);
}

function ClearButton({ children, showStyle, ...props }) {
	return (
		<button
			{...props}
			css={`
				background: none;
				border: none;
				color: var(--color-primary);
				${showStyle ? `visibility:hidden;` : null}
				&:hover {
					text-decoration: underline;
				}
				&:focus {
					outline: none;
				}
			`}
		>
			{children}
		</button>
	);
}

function DeleteButton({ children, ...props }) {
	return (
		<button
			{...props}
			css={`
				background: none;
				border: none;
				color: var(--color-primary--light);
				font-size: 2rem;
				&:hover {
					color: var(--color-primary);
				}
				&:focus {
					outline: none;
				}
			`}
		>
			{children}
		</button>
	);
}

export { ThemeButton, SwitchButton, ClearButton, DeleteButton };
