import React from 'react'

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
          <form>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.formInput.name}
            />

            <input
              description="description"
              type="textarea"
              placeholder="Description"
              value={this.state.formInput.description}
            />

            <input
              rules="rules"
              type="textarea"
              placeholder="Rules"
              value={this.state.formInput.rules}
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

export default NewChallengeForm
