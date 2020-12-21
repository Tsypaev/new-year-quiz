import React from "react";
import Info from "./components/info";
import Start from "./components/start";
import Form from "./components/form";

class App extends React.Component {

    state = {
        isStarted: false
    }

    setStartedTrue = async () => {
        this.setState({
            isStarted: true
        })
    }

    render() {
        return (
            <div>
                { !this.state.isStarted &&
                    <div>
                        <div><Info/></div>
                        <div><Start setStartedTrue={this.setStartedTrue}/></div>
                    </div>
                }
            </div>
        )
    }
}

export default App;