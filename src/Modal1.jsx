import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import FormEdit1 from './FormEdit1.jsx'

export default class Modal1 extends Component {
    render() {
        return (
            <div>
                {/* dialogClassName="modal-90w" */}
                <Modal.Dialog size="lg" >
                    <Modal.Header closeButton>
                        <Modal.Title>填寫資料</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <FormEdit1></FormEdit1>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}
