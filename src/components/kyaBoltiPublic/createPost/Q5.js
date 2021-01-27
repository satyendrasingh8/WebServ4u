import React from "react"
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { kyaBoltiPublic } from "../../../store/actions/projectAction"


class Q5 extends React.Component {
    
  state = {
    quizType:'',
    Qus1: '',
    Ans1: '',
    Qus2: '',
    Ans2: '',
    Qus3: '',
    Ans3: '',
    Qus4: '',
    Ans4: '',
    Qus5: '',
    Ans5: '',

  }
handleSubmit(e) {
    e.preventDefault()
    this.props.kyaBoltiPublic(this.state);
    
     this.resetForm()
 }
resetForm() {
    this.setState({
      quizType:'',
      Qus1: '',
      Ans1: '',
       Qus2: '',
       Ans2: '',
       Qus3: '',
       Ans3: '',
       Qus4: '',
       Ans4: '',
       Qus5: '',
       Ans5: '',
   
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
                name="message"
                className="text-primary"
                value={this.state.Ans2}
                placeholder="Answer 2"
                required
                onChange={this.handleChange.bind(this, 'Ans2')}
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject1">
              <Label className="text-muted">Qus.3</Label>
              <Input
                type="text"
                name="Qus3"
                className="text-primary"
                value={this.state.Qus3}
                onChange={this.handleChange.bind(this, 'Qus3')}
                placeholder="Question 3"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage12">
              <Label className="text-muted">Ans.3</Label>
              <Input
                type="text"
                name="Ans3"
                className="text-primary"
                value={this.state.Ans3}
                placeholder="Answer 3"
                required
                onChange={this.handleChange.bind(this, 'Ans3')}
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject13">
              <Label className="text-muted">Qus.4</Label>
              <Input
                type="text"
                name="Qus4"
                className="text-primary"
                value={this.state.Qus4}
                onChange={this.handleChange.bind(this, 'Qus4')}
                placeholder="Question 4"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage12">
              <Label className="text-muted">Ans.4</Label>
              <Input
                type="text"
                name="Ans4"
                className="text-primary"
                value={this.state.Ans4}
                placeholder="Answer 4"
                required
                onChange={this.handleChange.bind(this, 'Ans4')}
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject1as3">
              <Label className="text-muted">Qus.5</Label>
              <Input
                type="text"
                name="Qus5"
                className="text-primary"
                value={this.state.Qus5}
                onChange={this.handleChange.bind(this, 'Qus5')}
                placeholder="Question 5"
                required
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage121">
              <Label className="text-muted">Ans.5</Label>
              <Input
                type="text"
                name="Ans5"
                className="text-primary"
                value={this.state.Ans5}
                placeholder="Answer 5"
                required
                onChange={this.handleChange.bind(this, 'Ans5')}
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
      kyaBoltiPublic: (project) => dispatch(kyaBoltiPublic(project))
    }
  }

export default connect(null,mapDispatchToProps)(Q5);