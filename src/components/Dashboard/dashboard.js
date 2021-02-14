import React, { Component } from 'react';
import dashboardAction from '../../actions/dashboardAction';
import { connect } from 'react-redux';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getEmployeeList();
  }

  render() {
    let data = this.props.employeeList.user;
    const rows = data.map((row) => (
      <tr>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.gender}</td>
        <td>{row.email}</td>
        <td>{row.phoneNo}</td>
      </tr>
    ));

    return (
      <div className="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  employeeList: state.dashboardReducer.employeeList,
});

const mapActionsToProps = {
  getEmployeeList: dashboardAction.getEmployeeList,
};
export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
