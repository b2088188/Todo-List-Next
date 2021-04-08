import GlobalStyle from "components/styles/global";
import { ItemProvider } from "context/item-context";

function MyApp({ Component, pageProps }) {
	return (
		<ItemProvider>
			<GlobalStyle />
			<Component {...pageProps} />
		</ItemProvider>
	);
}

export default MyApp;
