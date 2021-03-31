import React from "react"
import "./style.css"

class ListItems extends React.Component {

//  this.state.data.map((item) => (
//     <ListItems
//       key={item.date + item.explanation + item.url}
//       date={item.date}
//       explanation={item.explanation}
//       title={item.title}
//       url={item.url}
//     />
//   ));
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