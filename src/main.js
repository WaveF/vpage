import './style.css'
import 'remixicon/fonts/remixicon.css'
import './tailwind.config'
import { createApp } from 'petite-vue'
import data from './data'
import { getJson } from './utils'

const { log, dir, table, clear, warn, error } = console

main()
async function main() {
  const config = await getJson('./config.json')
  log('mock-data:', data)
  createApp({
    ...config,
    Logo,
    libs: [
      {
        name: 'petite-vue',
        link: 'https://github.com/vuejs/petite-vue'
      },
      {
        name: 'tailwindcss-jit-cdn',
        link: 'https://beyondco.de/blog/tailwind-jit-compiler-via-cdn'
      },
      {
        name: 'remixicon',
        link: 'https://github.com/Remix-Design/RemixIcon'
      },
      {
        name: 'mockjs',
        link: 'http://mockjs.com/'
      },
      {
        name: 'mock-svg',
        link: 'https://www.npmjs.com/package/mock-svg'
      },
    ]
  }).mount('#app')
}

function Logo(props) {
  return {
    // Install 'es-string-html' extension in vscode for html highlighting below
    $template: /*html*/ `
      <img class="w-32 h-32 drop-shadow-xl duration-300 hover:scale-105" :src="logo">
    `,
    logo: props.image
  }
}