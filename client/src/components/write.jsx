import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";


class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
          };
    }

    onInputChange(value) {
        this.setState({ title: value });
      }
    
      onInputChange2(value) {
        this.setState({ content: value });
      }

    handleForm(event, title, content) {
        // event.preventDefault();
    
        const url = '/api/blog';
        
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify({title, content}), 
            headers: new Headers({
              'Content-Type': 'application/json; charset=utf-8'
            })
          }).then(res => console.log('Success!'))
          .catch(error => console.error('Error'))
        
      }

    render() {
            // console.log(this.state.content);
            // console.log(this.state.title);
        return (
            <div>
           
                {/* <h1 className='display-3' id='writeBlog'>Write a Blog!</h1> */}
            
                <div className='text-right'>
                <h1 className='display-3' id='writeBlog'>Write a Blog!</h1>
                <Link to="/"><button type="button" className="btn btn-dark btn-lg mt-2 mr-3">Go Back</button></Link>
            </div>
            <form
              className="d-flex justify-content-center mb-3 form-control-lg"
              onSubmit={(event) => this.handleForm(event, this.state.title, this.state.content)}
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
  
              <button className="bg-dark text-warning mt-1" type="submit">Post Blog</button>
              </div>
            </form>
          </div>        )
    }
}

export default Write;
