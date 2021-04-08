import Head from "next/head";
import styled from "styled-components/macro";
import { useState, useEffect } from "react";
import ItemList from "components/ItemList";
import { useItem } from "context/item-context";
import SwitchBar from "components/SwitchBar";
import InputForm from "components/InputForm";
import { ThemeButton } from "components/styles/Button";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
	const { listItems, showAll, showActive, showComplete } = useItem();
	const hasItem = listItems.length > 0;
	const [theme, setTheme] = useState("light");
	const nextTheme = theme === "light" ? "dark" : "light";

	useEffect(() => {
		document.body.dataset.theme = theme;
	}, [theme]);

	return (
		<>
			<Head>
				<title>Todo List</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
				/>
			</Head>
			<div
				css={`
					min-height: 100vh;
					background: var(--color-background);
					color: var(--color-primary);
				`}
			>
				{theme === "light" ? (
					<ThemeButton onClick={() => setTheme(nextTheme)}>
						<i className="fas fa-sun"></i>
					</ThemeButton>
				) : theme === "dark" ? (
					<ThemeButton onClick={() => setTheme(nextTheme)}>
						<i className="fas fa-moon"></i>
					</ThemeButton>
				) : null}

				<main
					css={`
						width: 90%;
						max-width: 60rem;
						margin: auto;
					`}
				>
					<h1
						css={`
							color: var(--color-primary--light);
							text-align: center;
							margin-bottom: 1rem;
							font-size: 5rem;
						`}
					>
						Todo List
					</h1>

					<div
						css={`
							background: var(--color-background--todo);
							box-shadow: 0 0 25px rgba(30, 30, 30, 0.3);
							border-radius: 5px;
							font-size: 1.7rem;
							font-weight: 300;
						`}
					>
						<InputForm />
						{hasItem ? (
							<>
								<ul>
									{showAll ? (
										<ItemList />
									) : showActive ? (
										<ItemList filterFn={(el) => el.status === "active"} />
									) : showComplete ? (
										<ItemList filterFn={(el) => el.status === "complete"} />
									) : null}
								</ul>
								<SwitchBar />
							</>
						) : null}
					</div>
				</main>
			</div>
		</>
	);
}
