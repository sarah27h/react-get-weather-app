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
        let key = this.props.countryList.filter((option, index) => 
            {
                // captilize country if user write its own choice and don't choose from datalist options
                // to pass filter methode test 
                // to handle case TypeError: Cannot read property 'countryCode' of undefined
                return option.value === country[0].toUpperCase() + (country).substr(1);
            });
        console.log(key, country);
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
                        <input 
                        aria-label="Search by city name"
                        placeholder="Start typing city" 
                        className="form-text" 
                        type="text" name="city"
                        required />
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