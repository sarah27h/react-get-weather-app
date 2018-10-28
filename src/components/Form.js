import React, { Component } from "react";

class Form extends Component {
    render() {
        return(
            <form>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="country..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;