import React, { Component } from "react";

class Form extends Component {

    // handle submit after user enter data and click submit btn
    handleSubmit = (e) => {
        // to prevent page refresh
        e.preventDefault();
        let city = document.getElementsByName("city")[0].value;
        let country = document.getElementsByName("country")[0].value;
        // pass user inputs as actions back to parent component <App />
        this.props.onSubmit(city, country);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="country..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;