import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body{
	height:100%;
}

html{
	font-size:62.5%;
}

body{
	box-sizing:border-box;
	font-family:'Roboto';
	
}

body[data-theme='light']{
--color-primary:#777;
--color-primary--light:rgba(175,47,47,.15);
--color-background:#f5f5f5;
--color-background--todo:#fff;
--color-border:rgba(190, 190, 190, 0.4);
}
body[data-theme='dark']{
--color-primary:#fff;
--color-primary--light:rgba(255,255,255,.5);
--color-background:#666;
--color-background--todo:#333;
--color-border:rgba(190, 190, 190, 0.4);
}


*,
*:before,
*:after{
	box-sizing:inherit;
	margin:0;
	padding:0;
	list-style: none;
}

`;

export default GlobalStyle;
