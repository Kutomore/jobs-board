import React, { Component } from 'react';
import axios from "axios";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter,
  Input, InputGroup, Label, FormGroup, Form
} from "reactstrap";

class App extends Component {
  state = {
    jobs: [],
    filters: {
      location: '',
      description: ''
    }
  }

  fetchJobs(){
    axios.get('http://localhost:3001/jobs', { params: this.state.filters }).then((response) =>{
        this.setState({
          jobs: response.data
        })
      }
    )
  }

  componentDidMount(){
    this.fetchJobs()
  }

  renderRow(block, index) {
    return (
      <div className="row" key={index}>
        {block}
      </div>
    );
  }

  renderJobBlock(job) {
    return (
      <div key={job.id} className="col-md-6 mt-3">
        <Card>
          <div className="crop-image">
            <CardImg top src={job.company_logo} alt={job.company}/>
          </div>
          <CardBody>
            <CardTitle tag="h5">{job.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{job.type}</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Posted {job.created_at}</CardSubtitle>
            <CardText dangerouslySetInnerHTML={{__html: job.description}}/>
          </CardBody>
          <CardFooter>
            <Button>See more</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  renderJobList() {
    let blocks = [], rows = [];
    this.state.jobs.forEach((item, index) => {
      const productBlock = this.renderJobBlock(item);
      if (productBlock) {
        blocks.push(productBlock);
      }
      if (blocks.length >= 2) {
        const row = this.renderRow(blocks, index);
        if (row) {
          rows.push(row);
        }
        blocks = [];
      }
    });
    return rows;
  }

  render() {
    let jobs = this.renderJobList()

    return (
      <div className="App container">
        <div className={'row'}>
          <div className={"col-md-9"}>
            {jobs}
          </div>
          <div className={"col-md-3"}>
            <div className="row">
              <Card className="mt-3 col-md-12">
                <Form>
                  <FormGroup>
                    <Label for="location">Choose a location</Label>
                    <Input id="location" type="select" value={this.state.filters.location} onChange={(e) => {
                      let { filters } = this.state
                      filters.location = e.target.value
                      this.setState(filters)
                      this.fetchJobs()
                    }}>
                      <option/>
                      <option>Chicago</option>
                      <option>San Francisco</option>
                      <option>Phoenix</option>
                      <option>London</option>
                      <option>Beijing</option>
                      <option>Paris</option>
                    </Input>
                    <Label for="description">Choose a language</Label>
                    <Input id="description" type="select" value={this.state.filters.description} onChange={(e) => {
                      let { filters } = this.state
                      filters.description = e.target.value
                      this.setState(filters)
                      this.fetchJobs()
                    }}>
                      <option/>
                      <option>Javascript</option>
                      <option>Java</option>
                      <option>Python</option>
                      <option>React</option>
                      <option>Ruby</option>
                      <option>Go</option>
                    </Input>
                  </FormGroup>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
