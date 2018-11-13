import React, {Component} from 'react';

class DataList extends Component {

    componentDidMount() {
        console.log('DataList componentDidMount');        
    }

    render() {
        console.log('DataList render');        

        return(
            <div className="form-row">
                <label hidden htmlFor="countries">Choose a country</label>

                {/* input field of datalist holds the option that is selected in the datalist */}
                <input className="form-text" list="countries" id="mycountries" name="mycountries" placeholder="Country..."/>
                <datalist id="countries">
                    {this.props.countryList.map((option, index) => {return <option name="countryOption" key={index} value={option.value}/>})}
                </datalist>
            </div>
        );
    }
}

export default DataList;