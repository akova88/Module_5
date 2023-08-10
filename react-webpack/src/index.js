import React from "react";
import ReactDOM from "react-dom/client";

// Tạo 1 component trong React
// C1: class Component


// Naming Convention của Component = Pascal case

class App extends React.Component {
    render() {
        // Logic
        return (
        // JSX
        <div>
            <h1>Learning Webpack </h1>
            <p>Học lập trình để đi làm</p>
        </div>
        
        )
    }
}

// C2: function Component => Hooks
function App1(){
    return (
        <h1>Learning Webpack </h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
