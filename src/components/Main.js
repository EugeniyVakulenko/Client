import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component{
    constructor(props)
    {
        super(props);   
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleFilterChange()
    {
        const filter = this.refs.dropdown.value;
        this.props.onFilterChange(filter);
    }
    handleTextChange()
    {
        const text = this.refs.text.value;
        this.props.onInputUpdate(text);
    }
    render(){
        const filters = this.props.filters.map(filter => {
            return <option value={filter.id} key={filter.id}>{filter.description}</option>
        })
        return(
            <div>
                <nav className="navbar navbar-dark bg-primary col-md-12">
                <div className="mx-auto m-20">
                    <h1>Metrics Caculator</h1>
                </div>
            </nav>
            <div className="form-group col-md-12">
            <textarea className="form-control textarea-autosize" rows="5" ref ="text" onChange={this.handleTextChange}></textarea>
            </div>
            <div className="form-group col-md-6">
            <select ref='dropdown' className="form-control"  onChange={this.handleFilterChange}  id ='filters'>
                {filters}   
            </select>
            </div>
            <div className = "col-md-6">
            <button className="btn btn-block btn-primary" onClick={this.props.onSubmit}>Calculate</button>
            </div>
            <div className= "col-md-12 m-5">
            <p>{this.props.response}</p>
            </div>
        </div>
        )
    }
}

export default Main;