import React from 'react'
import '../forms.css'
import {connect} from 'react-redux'
import {submitChallenge} from '../actions/challengeForm'

class NewChallengeForm extends React.Component {

    state = {
      name: "",
      description: "",
      rules: "",
      }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.submitChallenge(this.state)
    this.setState({
      name: "",
      description: "",
      rules: ""
    })
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
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              name="description"
              type="textarea"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />

            <input
              name="rules"
              type="textarea"
              placeholder="Rules"
              value={this.state.rules}
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
