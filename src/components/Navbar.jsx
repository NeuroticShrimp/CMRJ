import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

function Navbar2(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand href="/">CMRJ </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/Nasza Fundacja">Nasza Fundacja</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ProfDrCM">
                                Prof. Dr C.M.Rodkiewicz
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Zarzad">
                                Zarzad
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Poczatki">
                                Poczatki
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Laureaci">
                            Laureaci
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Podanie">
                            Podanie
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Edmonton">
                            Edmonton
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Galeria
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>2023</DropdownItem>
                                <DropdownItem>2022</DropdownItem>
                                <DropdownItem>2021</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navbar2;