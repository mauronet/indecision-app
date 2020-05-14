console.log('App is running')

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }

    renderIndecisionApp()
}

const removeAll = () => {
    app.options = []
    renderIndecisionApp()
}

const takeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNumber]
    alert(option)
}

var appRoot = document.getElementById('app')

const renderIndecisionApp = () => {
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options' }</p>
            <button disabled={ app.options.length === 0 } onClick={takeDecision}>What should I do?</button>            
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((item) => {
                    return <li key={item}>{item}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
}

renderIndecisionApp()

// let count = 0

// const addOne = () => {
//     count++
//     renderCounterApp()
// }

// const minusOne = () => {
//     count--
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0
//     renderCounterApp()
// }




// const renderCounterApp = () => {
//     var templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
    
//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp();