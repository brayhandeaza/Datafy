import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <header class="header" id="site-header">
                <div class="container">
                    <div class="header-content-wrapper">
                        <a href="/" class="site-logo">
                            <img width="50px" src="/img/DatafyLogo.png" alt="datafy" />
                            <h2 class="logo-title">Datafy</h2>
                        </a>
                        <nav id="primary-menu" class="primary-menu">
                            <a href='/' id="menu-icon-trigger" class="menu-icon-trigger showhide">
                                <span class="mob-menu--title">Menu</span>
                                <span id="menu-icon-wrapper" class="menu-icon-wrapper">
                                    <svg width="1000px" height="1000px">
                                        <path id="pathD"
                                            d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800">
                                        </path>
                                        <path id="pathE" d="M 300 500 L 700 500"></path>
                                        <path id="pathF"
                                            d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200">
                                        </path>
                                    </svg>
                                </span>
                            </a>
                            <ul class="primary-menu-menu">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">White Paper</a>
                                </li>
                                <li>
                                    <a href="/">Buy DTF</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;