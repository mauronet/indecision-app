import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))

// class OldSyntax {
//     constructor() {
//         this.name = 'Mao'
//         this.getGreeting = this.getGreeting.bind(this)
//     }
//     getGreeting(){
//         return `Hi, my name is ${this.name}`
//     }
// }

// class NewSyntax {
//     name = 'Mao'
//     getGreeting = () => {
//         return `Hi, my name is ${this.name}`
//     }
// }