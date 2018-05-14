// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { getAuthor } from '../services/user';
// import Read from './read';



class CreatedBy extends Component {
    constructor(props) {
        super(props);
        this.state = { author: {} };
        // console.log(props.value);
        this.id = props.value.authorid;
    }

    componentDidMount() {
        let id = `${this.id}`;

        getAuthor(id)
            .then((result) => {
                this.setState({ author: result });
                console.log(this.state.author);
            })
            .catch((error) => console.log('Error'));
    }

    render() {
        return (
            <div>
                <div className='display-4 text-center height100'>testjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                </div>
            </div>
            
        )
    }
}

// export default CreatedBy;
