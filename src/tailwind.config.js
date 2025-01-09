import { minifyCSS } from './utils'
// import tailwindcssTypography from 'https://cdn.skypack.dev/@tailwindcss/typography'

// Install 'es-string-css' extension in vscode for css highlighting below
const postcss = /*css*/ `
  .clickable { @apply !outline-none cursor-pointer duration-300; }
  .grid-area-1 { grid-area: 1/-1; }
  .text-shadow { text-shadow: 0 0 2px #FF1D6C99; }
`

const config = {
  theme: {
    extend: {
      width: { 'fit': 'fit-content' },
      height: { 'fit': 'fit-content' },
      colors: {
        'primary': {
          '100': '#ff0000',
          '200': '#ffff00',
          '300': '#00ffff',
          '400': '#0000ff',
        }
      }
    },
  },
  // prefix: 'tw_',
}

const script = document.createElement('script')
script.type = 'tailwind-config'
script.textContent = JSON.stringify(config)
document.head.appendChild(script)

const style = document.createElement('style')
style.setAttribute('type', 'postcss')
style.textContent = minifyCSS(postcss)
document.head.appendChild(style)

// window.tailwindConfig = { plugins: [ tailwindcssTypography ] }
// window.tailwindCSS.refresh()

export default config