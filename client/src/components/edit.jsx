import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
          };
        this.urlId = this.props.match.params.id;
        // console.log(this.urlId);
    }

    componentDidMount() {
        const url = `/api/blog/${this.urlId}`;

        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({ title: result.title, content: result.content  });
                // console.log(this.state.title);
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
    
        const url = `/api/blog/${this.urlId}`;
        
        fetch(url, {
            method: 'PUT', 
            body: JSON.stringify({title, content}), 
            headers: new Headers({
              'Content-Type': 'application/json; charset=utf-8'
            })
          }).then(res => console.log('Success!'))
          .catch(error => console.error('Error'))
        
      }

    render() {
        // console.log(this.state.title);
        // console.log(this.state.content);
        return (
            <div>
                   
            <div className='text-right'>
            <h1 className='display-3' id='writeBlog'>Edit Blog!</h1>
            <Link to={`/read/${this.urlId}`}><button type="button" className="btn btn-dark btn-lg mt-2 mr-3">Go Back</button></Link>
        </div>
        <form
          className="d-flex justify-content-center mb-3 form-control-lg"
          onSubmit={(event) => this.handleForm(event, this.state.title, this.state.content)}
        >
        <div className='form-group'>
          <input className='d-block w-100 trBorder'
            placeholder={this.state.title}
            value={this.state.value}
            onChange={(event) => this.onInputChange(event.target.value)}
          />
          <textarea rows='16' cols='100' className='d-block trBorder'
            // placeholder={this.state.content}
            value={this.state.content}
            onChange={(event) => this.onInputChange2(event.target.value)}
            >
          </textarea>

          <button className="bg-dark text-warning mt-1" type="submit">Post Blog</button>
          </div>
        </form>
      </div>  
        )
    }
}

export default Edit;
