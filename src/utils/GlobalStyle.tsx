import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, ::after, ::before {
      box-sizing: border-box;
  }
  .w-100 {
    width: 100%;
  }
  .hidden {
    display: none;
  }
`
