import React from 'react';
import {
  Table,
  Pagination,
  Select
} from 'antd'

import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
const { Column, ColumnGroup } = Table;
const { Option } = Select;


class HomePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {

    }

  }

  componentDidMount() {
 
  }


  render() {

    return (
      <div>
        <div>
          <MenuBar/>
        </div> 
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
          <h3>Homepage</h3>
          {/* <Table dataSource={this.state.playersResults} columns={playerColumns} pagination={{ pageSizeOptions:[5, 10], defaultPageSize: 5, showQuickJumper:true }}/> */}
        </div>
        <div class="col-md-4 offset-md-4">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Title Search"
            />
            <Button variant="outline-success">Title Search</Button>
          </Form>
        </div>


      </div>
    )

  }



}

export default HomePage

