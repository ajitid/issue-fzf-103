import './style.css'

import { Fzf } from 'fzf'

const list = ['go', 'javascript', 'python', 'rust', 
              'swift', 'kotlin', 'elixir', 'java', 
              'lisp', 'v', 'zig', 'nim', 'rescript', 
              'd', 'haskell']

const fzf = new Fzf(list)

const entries = fzf.find('as')
const result = entries.map(entry => entry.item).join(", ")

console.log(result)

// if you'd look in index.html file, you will find a `div` with id `app`
document.querySelector('#app').innerHTML = result

