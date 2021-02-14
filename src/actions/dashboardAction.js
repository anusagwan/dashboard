const dashboardAction = {
  getEmployeeList: () => {
    return (dispatch) => {
      dispatch({
        type: 'GET_EMPLOYEE_LIST',
      });
    };
  },
};

export default dashboardAction;
