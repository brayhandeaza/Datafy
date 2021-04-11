import React, { Component } from 'react'

class RoadMap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <section class="bg-dotted-map">
                <div class="container">
                    <div class="row medium-padding300 align-center">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <header class="crumina-module crumina-heading heading--h2 heading--with-decoration">
                                <h2 class="heading-title weight-normal">Datafy
                                <span class="weight-bold" style={{ color: "#f05136" }}> RoadMap</span>
                                </h2>
                            </header>
                            <div class="counters">
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="crumina-module crumina-counter-item">
                                        <div class="counter-numbers counter">
                                            <span data-speed="2000" data-refresh-interval="3" data-to="16"
                                                data-from="2"><span style={{ fontSize: 60 }}>{"Q1"}</span></span>
                                            <div class="units"><span style={{ fontSize: 40 }}> 2021</span></div>
                                        </div>
                                        <h4 class="counter-title">Average block size</h4>
                                        <p class="counter-text">Sem integer vitae justo eget magna. Eget nullam non nisi est
                                        sit amet. Nec ultrices dui sapien eget mi proin. Commodo sed egestas egestas.
                                      </p>
                                        <div class="counter-line"></div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="crumina-module crumina-counter-item">
                                        <div class="counter-numbers counter">
                                            <span data-speed="2000" data-refresh-interval="3" data-to="16"
                                                data-from="2"><span style={{ fontSize: 60 }}>{"Q3"}</span></span>
                                            <div class="units"><span style={{ fontSize: 40 }}> 2021</span></div>
                                        </div>
                                        <h4 class="counter-title">Average block size</h4>
                                        <p class="counter-text">Sem integer vitae justo eget magna. Eget nullam non nisi est
                                        sit amet. Nec ultrices dui sapien eget mi proin. Commodo sed egestas egestas.
                                    </p>
                                        <div class="counter-line"></div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="crumina-module crumina-counter-item">
                                        <div class="counter-numbers counter">
                                            <span data-speed="2000" data-refresh-interval="3" data-to="16"
                                                data-from="2"><span style={{ fontSize: 60 }}>{"Q3"}</span></span>
                                            <div class="units"><span style={{ fontSize: 40 }}> 2021</span></div>
                                        </div>
                                        <h4 class="counter-title">Average block size</h4>
                                        <p class="counter-text">Sem integer vitae justo eget magna. Eget nullam non nisi est
                                        sit amet. Nec ultrices dui sapien eget mi proin. Commodo sed egestas egestas.
                                    </p>
                                        <div class="counter-line"></div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                    <div class="crumina-module crumina-counter-item">
                                        <div class="counter-numbers counter">
                                            <span data-speed="2000" data-refresh-interval="3" data-to="16"
                                                data-from="2"><span style={{ fontSize: 60 }}>{"Q4"}</span></span>
                                            <div class="units"><span style={{ fontSize: 40 }}> 2021</span></div>
                                        </div>
                                        <h4 class="counter-title">Average block size</h4>
                                        <p class="counter-text">Sem integer vitae justo eget magna. Eget nullam non nisi est
                                        sit amet. Nec ultrices dui sapien eget mi proin. Commodo sed egestas egestas.
                                    </p>
                                        <div class="counter-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RoadMap;