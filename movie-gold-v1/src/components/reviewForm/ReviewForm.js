import { Form, Button } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revUser, revText, labelText, defaultValue }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={revUser} as="textarea" rows={1} defaultValue={defaultValue} placeholder="Enter your username"/>
        <br></br>
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} placeholder="Write your review here"/>
      </Form.Group>
      <Button variant="outline-info" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;