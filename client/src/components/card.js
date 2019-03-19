import React, { Component } from 'react';

import gg from '../util/gradient';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card__bg" style={{ background: `${gg.generateGradient()}` }}>
        </div>
        <div className="card__content">
          <div className="card__content__title">
            { this.props.title }
          </div>
          <div className="card__content__sub-title">
            { this.props.subTitle }
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
