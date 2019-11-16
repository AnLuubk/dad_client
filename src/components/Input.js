import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
  state = {
    title: '',
  };

  handleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  addTodo = () => {
    const task = { title: this.state.title };

    if (task.title && task.title.length > 0) {
      axios
        .post('/api/post', task)
        .then(res => {
          if (res.data) {
            this.props.getPosts();
            this.setState({ title: '' });
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log('input field required');
    }
  };
  render() {
    let { title } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={action} />
        <button onClick={this.addTodo}>add todo</button>
      </div>
    );
  }
}

export default Input;
