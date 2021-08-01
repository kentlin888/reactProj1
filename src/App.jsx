import React, { Component, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import {Button, Modal} from 'react-bootstrap'
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import NavBarHeader from './NavBarHeader.jsx'
import Table1 from './Table1.jsx'


export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBarHeader></NavBarHeader>
                <Table1></Table1>
            </React.Fragment>
        )
    }
}
