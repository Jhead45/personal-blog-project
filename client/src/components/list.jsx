import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";


class List extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.value.id);
    }

    render() {
        return (
            <tr className="text-left trBorder">
                <td className="w-75 trBorder"><q>{this.props.value.title}</q></td>
                {/* <td ClassName=''>{this.props.value._created}</td> */}
                <td className="trBorder text-center"><Link to={`/read/${this.props.value.id}`}>Read Blog</Link>
            </td>
            </tr>
        );
    }
}

export default List;
