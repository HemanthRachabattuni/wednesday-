import React from 'react';
import { Table } from 'reactstrap';

const edit = (
  <div>
    <p>Edit</p>

  </div>)
const Delete = (
  <div>
    <p>Delete</p>

  </div>)
const Repost = (
  <div>
    <p>Repost</p>

  </div>)
const Save = (
  <div>
    <p>Save</p>

  </div>)


const TableApplicants = (props) => {
  return (
    <Table style={{fontFamily:'Quicksand',}}>
      <thead >
        <tr >
          <th>#</th>
          <th>Applied Date</th>
          <th>Candidate Name</th>
          <th>Location</th>
          <th>Status</th>

        </tr>
      </thead>
      <tbody>
        <tr style={{ cursor: 'pointer' }} className='Table'>
          <th scope="row">1</th>
          <td style={{ fontSize: 15 }}>Mar 06</td>
          <td>Hemanth R</td>
          <td>Bangalore</td>
          <td>Selected</td>
        </tr>
        <tr style={{ cursor: 'pointer' }} className='Table'>
          <th scope="row">2</th>
          <td style={{ fontSize: 15 }}>Jul 21</td>
          <td>Sneha T</td>
          <td>Mumbai</td>
          <td>Rejected</td>
        </tr>
        <tr style={{ cursor: 'pointer' }} className='Table'>
          <th scope="row">3</th>
          <td style={{ fontSize: 15 }}>April 29</td>
          <td>Vaagdevi M</td>
          <td>Delhi</td>
          <td>Selected</td>
        </tr>

        <tr style={{ cursor: 'pointer' }} className='Table'>
          <th scope="row">4</th>
          <td style={{ fontSize: 15 }}>Oct 30</td>
          <td>Syed M</td>
          <td>Pune</td>
          <td>Rejected</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableApplicants;