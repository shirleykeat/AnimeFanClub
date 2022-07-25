import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';

const SearchBoxTitle =() =>{
    
    return(
        <div className='mx-auto p-4' style={{width:"800px"}}>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Title Search"
              className="me-2"
              aria-label="Title Search"
            />
            <Button variant="outline-success">Title Search</Button>
          </Form>
        </div>
    )

}
export default SearchBoxTitle;