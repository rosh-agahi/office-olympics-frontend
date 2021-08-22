import React from 'react'
import '../forms.css'

class NewChallengeForm extends React.Component {
  constructor(){
    super()
    this.state = {
      formInput: {
        name: "",
        description: "",
        rules: "",
      }
    }
  }

  render() {
    return (
      <div className="newChallenge">
        <h2>Add a New Challenge</h2>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.formInput.name}
              onChange={this.handleChange}
            />

            <input
              name="description"
              type="textarea"
              placeholder="Description"
              value={this.state.formInput.description}
              onChange={this.handleChange}
            />

            <input
              name="rules"
              type="textarea"
              placeholder="Rules"
              value={this.state.formInput.rules}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="Post Challenge"
            />

          </form>
        </div>
    )
  }

  handleChange = (e) => {
      const { name, value } = e.target
      this.setState({
        formInput: {
          ...this.state.formInput,
          [name]: value
        }
      })
    }

    handleSubmit = (e) => {
      const headers = {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.state.formInput)
      }

      fetch("http://127.0.0.1:3000/api/v1/challenges", headers)
        .then(r => r.json())
    }


}

export default NewChallengeForm
