import React, { Component } from 'react'
import { Button, Modal, Nav, Navbar, NavDropdown, Container, Dropdown, DropdownButton } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faCheckSquare, faCoffee, fas, faUser)
// import moduleName from '@fortawesome/fontawesome-svg-core'
export default class NavBarHeader extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid={true}>
                    <Navbar.Brand href="#home">數位證據資訊平台</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="申請送鑑">
                                <NavDropdown.Item href="#action/3.1">數位證據鑑識需求表</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">線上預約</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">送件證物收件暨歸還表</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                            <NavDropdown title="證物入出庫管理">
                                <NavDropdown.Item href="#action/3.1">新增案件</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">證物管理</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">證物入庫</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">證物出庫</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">複本入庫</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">複本出庫</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets">分案管理</Nav.Link>
                            <NavDropdown title="鑑識作業管理">
                                <NavDropdown.Item href="#action/3.1">工作紀錄表</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">承辦案件</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">鑑定報告</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">鑑定報告上鏈</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">歸還證物</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">複本入庫</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">複本出庫</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">抱怨意見</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="品保管制">
                                <NavDropdown.Item href="#action/3.1">鑑識需求-工作紀錄表</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">鑑識結果-工作紀錄表</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets">技術審查</Nav.Link>
                            <Nav.Link href="#deets">校對作業</Nav.Link>
                            <Nav.Link href="#deets">系統設定</Nav.Link>
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets"><FontAwesomeIcon icon="check-square" />技術審查</Nav.Link> */}
                            {/* <Nav.Link href="#deets"><FontAwesomeIcon icon={faUser} size="1x" /></Nav.Link> */}
                            {/* <NavDropdown title="麗臺 科員你好">
                                <NavDropdown.Item href="#action/3.1">系統設定</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">登出</NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" variant="primary">
                                        <FontAwesomeIcon icon={faUser} size="1x" />
                                        麗臺 科員你好
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu >
                                        <Dropdown.Item as="button">系統設定</Dropdown.Item>
                                        <Dropdown.Item as="button">登出</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>

                            

                            {/* <NavDropdown title="麗臺 科員你好" variant="dark">
                                <NavDropdown.Item href="#action/3.1">系統設定</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">登出</NavDropdown.Item>
                            </NavDropdown>
                            <FontAwesomeIcon icon={['fas', 'faUser']} /> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
