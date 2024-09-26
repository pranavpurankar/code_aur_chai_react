// Revision

/*
function customRender(reactElement, container){
    const domElement = document.createElement
    (reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement);
}

// How the function is looked by react or how react sees after compiled
const reactElement = {
    type:'a',
    props: {
        href:'https://google.com',
        target: '_blank'   
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector("#root");

// Rendering some html, above reactElement

customRender(reactElement, mainContainer)

*/

// Version_2 of the above code -> This is the custom react

// There is problem in the custom react function, if there are other objects
// like href, target, and another third object this will create a problem

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props){
        if(prop === children) continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}


const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)


// function customRender(reactElement,container){
//     /*
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href',reactElement.props.href);
//     domElement.setAttribute('target',reactElement.props.target);

//     mainContainer.appendChild(domElement);
//     */
//    const domElement = document.createElement(reactElement.type)
//    domElement.innerHTML = reactElement.children
//    for (const prop in reactElement.props) {
//     if (prop === 'children') continue;
//     domElement.setAttribute(prop, reactElement.props[prop])
//    }
//    container.appendChild(domElement)
// }


// // Simulation, how react looks at it or how react compile (loosely using compile)

// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'Click me to visit google'
// };

// const mainContainer = document.querySelector('#root');

// customRender(reactElement,mainContainer);