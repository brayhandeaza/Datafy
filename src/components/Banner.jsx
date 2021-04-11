import React, { Component } from 'react'


class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Banner">
                 <canvas id="can" style={{position: "absolute"}} ></canvas>
                <section data-settings="particles-1"
                    class="main-section crumina-flying-balls particles-js bg-1 responsive-align-center">
                    <div class="container">
                        <div class="row">
                            {/* <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                <header class="crumina-module crumina-heading heading--h1 heading--with-decoration">
                                    <h1 class="heading-title f-size-90 weight-normal no-margin">Cryptocurrency
                                    <br />
                                        <span>investments</span>
                                    </h1>
                                    <h2 style={{ color: '#f05136 ' }}>Blockchain solutions</h2>
                                </header>
                                <a data-scroll href="index.html#details" style={{ marginBottom: 50 }} class="btn btn--large btn--transparent btn--secondary">Details</a>
                            </div> */}
                            <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                                {/* <img style={{ width: 400 }} class="responsive-width-50" src="img/main.png" alt="main" /> */}
                            </div>
                        </div>
                    </div>
                   
                </section>
            </div>
        )
    }
}

export default Banner