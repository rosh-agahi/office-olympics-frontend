import React from 'react'
import '../forms.css'
import {connect} from 'react-redux'
//import {submitChallenge} from '../actions/challengeForm'

class NewSubmissionForm extends React.Component {

    state = {
      name: "",
      text: "",
      videourl: "",
      votes: 0,
      challenge_id: ""
      }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    // this.props.submitChallenge(this.state)
    this.setState({
      name: "",
      text: "",
      rules: "",
      votes: 0
    })
  }

  render() {
    return (
      <div className="newSubmission">
        <h3
          style={
            {textAlign: "center",
            margin: 0}}>
              Make a Submission:
        </h3>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              name="text"
              type="textarea"
              placeholder="Description"
              value={this.state.text}
              onChange={this.handleChange}
            />

            <input
              name="videourl"
              type="textarea"
              placeholder="Paste your Youtube Embed URL"
              value={this.state.videourl}
              onChange={this.handleChange}
            />

            <input
              type="submit"
              value="Submit"
            />

          </form>
        </div>
    )
  }

}

//export default connect(null, {submitChallenge})(NewSubmissionForm)
export default NewSubmissionForm
