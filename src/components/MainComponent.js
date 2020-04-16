import React, {Component} from 'react';
import Main from './Main'

class MainComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            filters : [],
            selectedFilter: "",
            input: "",
            response : ""
        }
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleSubmitAction = this.handleSubmitAction.bind(this);
    }
    componentDidMount()
    {
        fetch('https://localhost:44363/api/metrics')
        .then(res => res.json())
        .then(state =>{
            this.setState({filters: state});
            this.setState({selectedFilter : this.state.filters[0].id})
        } )
    }

    handleFilterChange(filter)
    {
        this.setState({selectedFilter : filter});
    }

    handleSubmitAction()
    {
        if(this.state.input === "")
        {
            alert("Text field can't be empty!");
        }
        else{
        fetch('https://localhost:44363/api/metrics?id='+this.state.selectedFilter,
        {   
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(this.state.input)
        }) 
        .then(res => res.text())
        .then(data => this.setState({response: data}));
        }
    }
    

    updateInputValue(text)
    {
        this.setState({input: text});
    }

    render(){
        return(<Main filters={this.state.filters} onFilterChange={this.handleFilterChange} onInputUpdate={this.updateInputValue}
             onSubmit={this.handleSubmitAction} response = {this.state.response}/>);
    }
}

export default MainComponent;