import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import * as blogService from '../services/blog';
import * as userService from '../services/user';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            authorid: ''
        };
    }

    componentDidMount() {
        let id = `${this.props.blogid}`;

        blogService.one(id).then((result) => {
          console.log(result);
            this.setState({ title: result.title, content: result.content, authorid: result.authorid });
        }).catch((err) => {
            console.log(err);
        });
    }

    onInputChange(value) {
        this.setState({ title: value });
    }

    onInputChange2(value) {
        this.setState({ content: value });
    }

    handleForm(event, title, content) {
        event.preventDefault();

        // console.log(this.state.userid);
        // console.log(this.state.authorid);
        if(this.props.userid === this.props.authorid) {
        let id = `${this.props.blogid}`;
        blogService
            .update(id, this.state)
            .then((res) => {
                location.reload();
            })
            .catch((error) => console.error('Error'));

        } 
    }

    render() {
        // console.log(this.state.title);
        // console.log(this.state.content);
        return (
            <div>
                <div className="text-center">
                    <h1 className="display-3" id="writeBlog">
                        Edit Blog!
                    </h1>
                </div>
                <form
                    className="d-flex justify-content-center mb-3 form-control-lg"
                    onSubmit={(event) =>
                        this.handleForm(
                            event,
                            this.state.title,
                            this.state.content
                        )
                    }>
                    <div className="form-group">
                        <input
                            className="d-block w-100 trBorder"
                            placeholder={this.state.title}
                            value={this.state.title}
                            onChange={(event) =>
                                this.onInputChange(event.target.value)
                            }
                        />
                        <textarea
                            rows="16"
                            cols="100"
                            className="d-block trBorder"
                            value={this.state.content}
                            onChange={(event) =>
                                this.onInputChange2(event.target.value)
                            }
                        />

                        <button
                            className="bg-dark mt-1 text-white"
                            type="submit">
                            Post Blog
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Edit;
