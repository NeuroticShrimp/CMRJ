import * as React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const navTabs = ["Nasza Fundacja", "Prof. Dr C.M.Rodkiewicz", "Zarzad", "Poczatki", "Laureaci", "Podanie", "Edmonton", "Galeria"];


function TabNav() {
    return (
        <nav className="navBar-Container">
            
            {navTabs.map(navTab =>
                <ul
                    key={navTab}>
                    <NavLink
                        to={navTab}
                        className={({ isActive }) => "navTab " + (isActive ? "active" : "")}>
                        {navTab}
                    </NavLink>
                </ul>)}
        </nav>)
}



TabNav.propTypes = {
    onUpdateNavTab: PropTypes.func.isRequired,
}

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: "landingPage",
        };
        this.updateNavTab = this.updateNavTab.bind(this);
    }


    componentDidMount() {
        this.updateNavTab(this.state.selectedTab)
    }

    updateNavTab(selectedTab) {
        this.setState({
            selectedTab,
        });
    }

    render() {
        return (
                <TabNav
                    onUpdateNavTab={this.updateNavTab} />
        );
    }
}


