import React, { Component } from 'react';
import Works from './Works/Works';

class Portfolio extends Component {
  render() {
    
    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

              <h1>Check Out Some of My Works.</h1>

              <Works />
            </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
