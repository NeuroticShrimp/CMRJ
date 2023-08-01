import * as React from "react";
import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";

const navTabs = ["Nasza Fundacja", "Prof. Dr C.M.Rodkiewicz", "Zarzad", "Poczatki", "Laureaci", "Podanie", "Edmonton", "Galeria"];



function SmallTabNav({ selected, onUpdateNavTab }) {

    return (
        <nav>
            <select
                onChange={(e) => onUpdateNavTab(e.target.value)}
                selected={selected}
            >
                {navTabs.map((navTab) => (
                    
                    <option key={navTab} value={navTab}>
                        {navTab}
                    </option>
                ))}
            </select>
        </nav>
    );
}

SmallTabNav.propTypes = {
    onUpdateNavTab: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
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
            <div className="navBar-Container">
                <SmallTabNav
                    onUpdateNavTab={this.updateNavTab} />
            </div>
        );
    }
}


