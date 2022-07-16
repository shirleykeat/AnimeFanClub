import React from 'react';
import {
  Table,
  Pagination,
  Select
} from 'antd'

import MenuBar from '../components/MenuBar';
import { getAllMatches, getAllPlayers } from '../fetcher'
const { Column, ColumnGroup } = Table;
const { Option } = Select;

class Anime extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }

  }


  render() {

    return (
      <div>
        <MenuBar />
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
          <h3>Players</h3>
        </div>
      </div>
    )
  }

}

export default Anime

