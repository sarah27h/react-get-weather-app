import React, { Component } from "react";
import DataList from './DataList'

class Form extends Component {

    // handle submit after user enter data and click submit btn
    handleSubmit = (e) => {
        // to prevent page refresh
        e.preventDefault();
        // get user inputs for city & country 
        let city = document.getElementsByName('city')[0].value;

        // In a datalist you do not need the .selected command.
        // input field of datalist holds the option that is selected in the datalist
        let country = document.getElementById('mycountries').value;
        let key = this.props.countryList.filter((option, index) => {return option.value === country});

        // pass user inputs as actions back to parent component <App />
        this.props.onSubmit(city, key[0].countryCode);
    }

    componentDidMount() {
        console.log('Form componentDidMount');        
    }

    render() {
        console.log('Form render');
        return(
            <section className="form-container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <input className="form-text" type="text" name="city" placeholder="City..."/>
                    </div>
                    <DataList 
                        countryList={this.props.countryList}
                    />
                    <button className="sub-btn" type="submit">Get Weather</button>
                </form>
            </section>
        );
    }
}

export default Form;