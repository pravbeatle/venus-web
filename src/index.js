/* eslint-disable */
import React from 'react'
import {render} from 'react-dom'
import {App} from './containers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from './reducers'
import './styles/index.css'

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension())
render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
