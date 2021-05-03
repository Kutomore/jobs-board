import React, { Component } from 'react';
import axios from "axios";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from "reactstrap";

class App extends Component {
  state = {
    jobs: [],
    description: '',
    location: ''
  }

  fetchJobs(){
    axios.get('http://localhost:3001/jobs').then((response) =>{
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
    console.log(job)
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
              <Card className="mt-3">
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
