// import tailwindcssTypography from 'https://cdn.skypack.dev/@tailwindcss/typography'

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
}

const script = document.createElement('script')
script.type = 'tailwind-config'
script.textContent = JSON.stringify(config)
document.head.appendChild(script)

// window.tailwindConfig = { plugins: [ tailwindcssTypography ] }
// window.tailwindCSS.refresh()

export default config