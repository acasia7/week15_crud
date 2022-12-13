import React from 'react';

export default class NewCityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            areaValue: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value});
    }

    handleAreaChange(e) {
        this.setState({areaValue: e.target.value});
    }

    handleClick(e) {
        this.props.addNewCity(e, this.props.data,
            {name: this.state.nameValue, area: this.state.areaValue});
        this.setState({nameValue: '', areaValue: ''});
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="City" onChange={this.handleNameChange} value={this.state.nameValue} />
                <input type="text" placeholder="Country" onChange={this.handleAreaChange} value={this.state.areaValue} />
                <button onClick={this.handleClick}>Add City</button>
            </div>
        );
    }

}