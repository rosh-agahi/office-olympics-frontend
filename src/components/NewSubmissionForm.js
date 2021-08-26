import React from 'react'
import '../forms.css'
import {connect} from 'react-redux'
import {newSubmission} from '../actions/submission'

class NewSubmissionForm extends React.Component {

    state = {
      name: "",
      text: "",
      videourl: "",
      votes: 0,
      challenge_id: this.props.challenge
      }

  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.newSubmission(this.state)
    // this.setState({
    //   name: "",
    //   text: "",
    //   rules: "",
    //   votes: 0,
    //   challenge_id: this.props.challenge
    // })
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
              name="challenge_id"
              type="hidden"
              value={this.state.challenge_id}
            />

            <input
              name="votes"
              type="hidden"
              value={this.state.votes}
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

export default connect(null, {newSubmission})(NewSubmissionForm)
// export default NewSubmissionForm
