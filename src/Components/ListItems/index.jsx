import React from "react"
import "./style.css"

class ListItems extends React.Component {


    render() {
        return (
        <div>
        <p> {this.props.date}</p>
        <div>{this.props.explanation}</div>
        <img className="img" src={this.props.url} alt={`${this.props.title}`}/>
        </div>)
    }
}

export default ListItems