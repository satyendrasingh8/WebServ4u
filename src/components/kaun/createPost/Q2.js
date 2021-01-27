import React, { Component } from 'react'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { fakeOrNot } from "../../../store/actions/projectAction"
class Q2 extends Component {
  state = {
    quizType:'',
    Qus1: '',
    Ans1: '',
    Qus2: '',
    Ans2: '',
  }
handleSubmit(e) {
    e.preventDefault()
    this.props.fakeOrNot(this.state);
     this.resetForm()
 }
resetForm() {
    this.setState({
      quizType:'',
      Qus1: '',
      Ans1: '',
       Qus2: '',
       Ans2: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
        
          <Form onSubmit={this.handleSubmit.bind(this)}>
            
          <FormGroup controlId="formBasicquizType">
              <Label className="text-muted">About Quiz</Label>
              <Input
                type="text"
                name="quizType"
                value={this.state.quizType}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'quizType')}
                placeholder="About Quiz"
                required
              />
            </FormGroup>

<FormGroup controlId="formBasicName">
              <Label className="text-muted">Qus.1</Label>
              <Input
                type="text"
                name="Qus1"
                value={this.state.Qus1}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'Qus1')}
                placeholder="Question1"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Ans.1</Label>
              <Input
                type="text"
                name="Ans1"
                value={this.state.Ans1}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'Ans1')}
                placeholder="Answer 1"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Qus.2</Label>
              <Input
                type="text"
                name="Qus2"
                className="text-primary"
                value={this.state.Qus2}
                onChange={this.handleChange.bind(this, 'Qus2')}
                placeholder="Question 2"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Ans.2</Label>
              <Input
                type="text"
                name="Ans2"
                className="text-primary"
                value={this.state.Ans2}
                placeholder="Answer 2"
                required
                onChange={this.handleChange.bind(this, 'Ans2')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      fakeOrNot: (project) => dispatch(fakeOrNot(project))
    }
  }

export default connect(null,mapDispatchToProps)(Q2);