import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            istoggle: false
        }
    }
    render() {
        return (
            <header className="header" id="site-header">
                <div className="container">
                    <div className="header-content-wrapper" style={{ display: "flex", flexDirection: "column" }}>
                        <div className="toggle-menu" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                            <div className="logo">
                                <a href='javascript:void(0)' className="site-logo" onClick={(e) => e.stopPropagation()}>
                                    <img width="50px" src="/img/DatafyLogo.png" alt="datafy" />
                                    <h2 className="logo-title">Datafy</h2>
                                </a>
                            </div>
                            <nav id="primary-menu" className="primary-menu">
                                <a href='javascript:void(0)' onClick={() => this.setState({ istoggle: !this.state.istoggle })} id="menu-icon-trigger" className="menu-icon-trigger showhide">
                                    <span id="menu-icon-wrapper" className="menu-icon-wrapper">
                                        <svg width="1000px" height="1000px">
                                            <path id="pathD"
                                                d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800" >
                                            </path>
                                            <path id="pathE" d="M 300 500 L 700 500"></path>
                                            <path id="pathF"
                                                d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200">
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                                <ul className="primary-menu-menu">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="index.html">White Paper</a>
                                    </li>
                                    <li>
                                        <a href="index.html">How to buy DTF</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {this.state.istoggle ?
                            <ul className="taggle-menu-items primary-menu-menu">
                                <li>
                                    <a href="#Footer">Home</a>
                                </li>
                                <li>
                                    <a href="index.html">White Paper</a>
                                </li>
                                <li>
                                    <a href="index.html">How to buy DTF</a>
                                </li>
                            </ul> : null
                        }
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;