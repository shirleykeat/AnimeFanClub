import React from 'react';
import {
  Table,
  Pagination,
  Select
} from 'antd'

import MenuBar from '../components/MenuBar';
import Button from '../components/Button';
// import { getAllMatches, getAllPlayers } from '../fetcher'
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
        <MenuBar />
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
          <h3>Homepage</h3>
          {/* <Table dataSource={this.state.playersResults} columns={playerColumns} pagination={{ pageSizeOptions:[5, 10], defaultPageSize: 5, showQuickJumper:true }}/> */}
        </div>
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>

        </div>


      </div>
    )

    return (
      <div>
        <h3>This is my new project</h3>
        <Button label="test" kind="primary"/>
      </div>

    )
  }



}

export default HomePage

