import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = (state, ownProps) => ({
    userID: state.login,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: () => {
      dispatch(actionCreator)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)

