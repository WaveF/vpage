import './style.css'
import 'remixicon/fonts/remixicon.css'
import './tailwind.config'
import { createApp } from 'petite-vue'
import data from './data'

const { log, dir, table, clear, warn, error } = console

createApp({
  pic: data.pic
}).mount('#app')