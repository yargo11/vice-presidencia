import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline: 0;
}

body{
  background: #213e38;
  color:#fff;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font-family: 'Roboto-slab', serif;
}

button{
  cursor: pointer;
}
`;
