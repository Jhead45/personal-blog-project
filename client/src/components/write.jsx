import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import * as blogService from '../services/blog';
import { checkUser } from '../services/user';


class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            authorid: ""
          };
    }

    componentDidMount() {

      checkUser()
      .then((res) => {
        console.log(typeof res);
        this.setState({ authorid: res });
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    onInputChange(value) {
        this.setState({ title: value });
      }
    
      onInputChange2(value) {
        this.setState({ content: value });
      }

    handleForm(event, title, content, authorid) {
        event.preventDefault();
    
        
        blogService.insert(this.state)
          .then(res => {
            console.log(this.state);
            this.props.history.replace(`/`);
          })
          .catch(error => console.error('Error'))
      }

    render() {
            // console.log(this.state.content);
            // console.log(this.state.title);
        return (
            <div>
           
            
                <div className='text-center'>
                <h1 className='display-3' id='writeBlog'>Write a Blog!</h1>
            </div>
            <form
              className="d-flex justify-content-center mb-3 form-control-lg"
              onSubmit={(event) => this.handleForm(event, this.state.title, this.state.content, this.state.authorid)}
            >
            <div className='form-group'>
              <input className='d-block w-100 trBorder'
                placeholder="Title"
                value={this.state.title}
                onChange={(event) => this.onInputChange(event.target.value)}
              />
              <textarea rows='16' cols='100' className='d-block trBorder'
                placeholder="Start writing your blog here."
                value={this.state.content}
                onChange={(event) => this.onInputChange2(event.target.value)}>
              </textarea>
  
              <button className="bg-dark text-white mt-1" type="submit">Post Blog</button>
              </div>
            </form>
          </div>        )
    }
}

export default Write;
