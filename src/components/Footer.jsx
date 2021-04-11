import React, { Component } from 'react'


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <footer class="footer">
                {/* <canvas id="can"></canvas> */}
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
                            <div class="widget w-info">
                                <a href="index.html" class="site-logo">
                                    <img width="40px" src="/img/DatafyLogo.png" alt="Woox" />
                                    <h2 class="logo-title">Datafy</h2>
                                </a>
                                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit
                                litterarum formas humanitatis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed
                                viverra vulputate sapien nec sagittis aliquam bibendum.</p>
                            </div>
                            <div class="widget w-contacts">
                                <ul class="socials socials--white">
                                    <li class="social-item">
                                        <a href="index.html#">
                                            <i class="fab fa-twitter woox-icon"></i>
                                        </a>
                                    </li>
                                    <li class="social-item">
                                        <a href="index.html#">
                                            <i class="fab fa-dribbble woox-icon"></i>
                                        </a>
                                    </li>
                                    <li class="social-item">
                                        <a href="index.html#">
                                            <i class="fab fa-instagram woox-icon"></i>
                                        </a>
                                    </li>
                                    <li class="social-item">
                                        <a href="index.html#">
                                            <i class="fab fa-linkedin-in woox-icon"></i>
                                        </a>
                                    </li>
                                    <li class="social-item">
                                        <a href="index.html#">
                                            <i class="fab fa-facebook-square woox-icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer