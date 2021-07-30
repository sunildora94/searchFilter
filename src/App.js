import React, {Component} from 'react';
import {connect} from 'react-redux';
// import './App.css';
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
// import * as actionType from './store/Actions';
import {TableRecordsComponent}  from './Transactions';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        searchValue: '',
        ratingValue: 0
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);//=== to handle the rating input value changes
    this.handleChange = this.handleChange.bind(this);//=== to handle the search input value changes
  }

  /************************************************************
   * Handle ratings input values
   ************************************************************/
  handleRatingChange = (e) => {
    const rating_val = e.target.value;
    this.setState({ratingValue: Number(rating_val)});
  }

  /************************************************************
   * Handle searching input values
   ************************************************************/
  handleChange = (e) => {

    const search_val = e.target.value;
    this.setState({searchValue: search_val});
    
  }

  /************************************************************
   * Render the component output
   ************************************************************/
  render() {

    return (
      <Container>
        {/* Filter inputs */}
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select aria-label="Rating" value={this.state.ratingValue} onChange={this.handleRatingChange}>
                <option value="">select ratings</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" placeholder="search name, city or Cuisine Style" value={this.state.searchValue} onChange={this.handleChange} />
            </Form.Group>
          </Col>
        </Row>
        {/* Filtered records */}
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>City</th>
                  <th>Cuisine Style</th>
                  <th>Ranking</th>
                  <th>Rating</th>
                  <th>Number of Reviews.</th>
                </tr>
              </thead>
              <tbody>
                <TableRecordsComponent searchValue={this.state.searchValue} ratingValue={this.state.ratingValue} />
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
  
/************************************************************
   * Manage redux actions & state values
   ************************************************************/
const mapStateToProps = state => {
  return {
    dataEntries: state.dataEntries
  }
};

// const mapDispatchToProps = dispatch => {

//   return {
//     onUpdateRecord: (remove_value) => {
//       dispatch({
//           type: actionType.MANAGE_REDORD,
//           data: remove_value
//       });
//     }
//   }

// };

export default connect(mapStateToProps, null)(App);

