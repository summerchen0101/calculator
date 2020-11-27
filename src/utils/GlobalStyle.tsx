import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, ::after, ::before {
      box-sizing: border-box;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .col {
    flex: 1;
  }
  .w-100 {
    width: 100%;
  }
`
