/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      header: string
      background: string
      text: string
      highlight: string
      separator: string
    }
  }
}
