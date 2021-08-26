import React from 'react'
import '../forms.css'
import {connect} from 'react-redux'
import {submitChallenge} from '../actions/challengeForm'

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
    e.preventDefault()
    this.props.submitChallenge(this.state)
  }

  render() {
    return (
      <div className="newChallenge">
        <h2>Add a New Challenge</h2>
          <form autoComplete="off" onSubmit={this.submitChallenge}>
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

}

export default connect(null, {submitChallenge})(NewChallengeForm)
