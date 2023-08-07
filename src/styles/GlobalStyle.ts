import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color1: #4c4c4c;
  --color2: #4c4c4c;
  --color3: #4c4c4c;
  --color4: #1565c0;
  --color5: #f7f7f7;

font-size: 60%;
}

/* 
font-size: 16px;
1rem=10px
 */

@media (min-width: 700px){
  :root {
    font-size: 62.5%;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body,html{
  width: 100vw;
  height: 100vh;
}

body {
background: var(--color5);
color: var(--color1);
-webkit-font-smoothing: antialiased;

overflow-x: hidden;
}

body, input, button, textarea {
  font-family: "Inter";
  font-size: 1.6rem;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button {
  cursor: pointer;
  width: 20px;
  height: 30px;
}
`;
