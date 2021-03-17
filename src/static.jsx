import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from './App'

const markup = ReactDOMServer.renderToStaticMarkup(<App />)
const string = ReactDOMServer.renderToString(<App />)

console.log('---')
console.log(markup)
console.log('---')
console.log(string)
console.log('---')
