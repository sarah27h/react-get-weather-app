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

    componentDidMount() {
        console.log('Form componentDidMount');        
    }

    render() {
        console.log('Form render');
        return(
            <div className="form-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <input className="form-text" type="text" name="city" placeholder="City..."/>
                    </div>
                    <div className="form-row">
                        <input className="form-text" type="text" name="country" placeholder="country..."/>
                    </div>
                    <button className="sub-btn" type="submit">Get Weather</button>
                </form>
            </div>
        );
    }
}

export default Form;