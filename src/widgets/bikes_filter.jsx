import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default class BikesFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {model: "", color: "", location: "", rating: "", date: null};
  }

  onTextChange(fieldName, e) {
    const text = e.target.value;
    this.setState({[fieldName]: text});
  }

  handleDateChange(fieldName, date) {
    this.setState({[fieldName]: date});
  }

  handleFilterChange() {
    this.props.onFilterChange(this.state);
  }

  handleClearFilter() {
    this.setState({model: "", color: "", location: "", rating: "", date: null});
    this.props.onClearFilter();
  }

  render() {
    const {model, color, location, rating, date} = this.state;
    const {loading} = this.props;

    return (
      <div className="rental-container bikes-filter-container">
        <div>
          <Form.Label>Model</Form.Label>
          <Form.Control size="sm"
                        type="text"
                        value={model}
                        onChange={this.onTextChange.bind(this, "model")}
          />
        </div>
        <div>
          <Form.Label>Color</Form.Label>
          <Form.Control size="sm"
                        type="text"
                        value={color}
                        onChange={this.onTextChange.bind(this, "color")}
          />
        </div>
        <div>
          <Form.Label>Location</Form.Label>
          <Form.Control size="sm"
                        type="text"
                        value={location}
                        onChange={this.onTextChange.bind(this, "location")}
          />
        </div>
        <div>
          <Form.Label>Rate</Form.Label>
          <Form.Control size="sm"
                        type="number"
                        value={rating}
                        onChange={this.onTextChange.bind(this, "rating")}
          />
        </div>
        <div>
          <Form.Label>Available by</Form.Label>
          <DatePicker onChange={this.handleDateChange.bind(this, "date")}
                      minDate={new Date()}
                      selected={date}
                      dateFormat="yyyy-MM-dd"
          />
        </div>
        <div>
          <div className="mb-1">
            <Button size="sm"
                    onClick={this.handleFilterChange.bind(this)}
                    variant="primary"
                    disabled={loading}
            >
              Filter
            </Button>
          </div>
          <div>
            <Button size="sm"
                    onClick={this.handleClearFilter.bind(this)}
                    variant="secondary"
                    disabled={loading}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
