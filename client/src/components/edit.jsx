import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import * as blogService from '../services/blog';



class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
          };
        this.id = this.props.match.params.id;
        // console.log(this.id);
    }

    componentDidMount() {
        let id = `${this.id}`;

        blogService.one(id)
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
    
        let id = `${this.id}`;
        
        blogService.update(id, this.state)
          .then(res => {
            this.props.history.replace(`/read/${this.id}`);
          })
          .catch(error => console.error('Error'))
        
      }

    render() {
        // console.log(this.state.title);
        // console.log(this.state.content);
        return (
            <div>
                   
            <div className='text-right'>
            <h1 className='display-3' id='writeBlog'>Edit Blog!</h1>
            <Link to="/"><button type="button" className="btn btn-dark btn-lg mt-2 mr-5">Go Back</button></Link>

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

          <button className="bg-dark mt-1 text-white" type="submit">Post Blog</button>
          </div>
        </form>
      </div>  
        )
    }
}

export default Edit;