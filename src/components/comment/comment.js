import React from "react"
import { Card, Col, Container, Nav, Row } from "react-bootstrap"
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import {connect} from 'react-redux'
import './comment.css'
import { createComment } from "../../store/actions/commentAction"

class Comment extends React.Component {
    
  state = {
    name: '',
    comment: '',
  }
   
handleSubmit(e) {
    e.preventDefault()
    this.props.createComment(this.state);

//     db.collection("postComment").add({
//       timestamp:Date.now(),
//       name: this.state.name,
//       comment: this.state.comment,
//   })
//   .then(function() {
//       console.log("Document successfully written!");
//   })
//   .catch(function(error) {
//       console.error("Error writing document: ", error);
//   });
//     console.log(name,comment);
     this.resetForm();
     
 }
resetForm() {
    this.setState({
      name: '',
      comment: '',
    })

  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

render() {
    return (
      <div>
  <Container   style={{
      width: "90%",
      paddingLeft: 20,
      paddingRight: 10,
      paddingTop: 30,
      paddingBottom: 30,
      border: "3px solid lightGray",
    }} >
       <Row >
          <Form onSubmit={this.handleSubmit.bind(this)}>
          <Row>
<FormGroup controlId="formBasicName" className="inputComment">
<Col xs="3" sm="3" md="3" lg="3">  <Label className="text-muted">Name</Label></Col>
<Col  md="auto" xs="9" sm="9" md="9" lg="9">   <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                required
              /></Col>
            </FormGroup></Row>
            <Row>
            <FormGroup controlId="formBasicEmail" style={{width:"300px"}}>
            <Col  xs="3" sm="3" md="3" lg="3">  <Label className="text-muted">Comment</Label></Col> 
            <Col md="auto" xs="9" sm="9" md="9" lg="9">  <Input
                type="textarea"
                name="comment"
                value={this.state.comment}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'comment')}
                placeholder="say something.."
                required
              /></Col> 
            </FormGroup></Row>
 
   <Button variant="primary" type="submit"  >
     Post  
    </Button>
    <br></br>
          </Form>
          </Row></Container>
        
      </div>
    )
  }

  }

  const mapDispatchToProps = dispatch => {
    return {
      createComment: (comment) => dispatch(createComment(comment))
    }
  }
  
export default connect(null,mapDispatchToProps)(Comment);