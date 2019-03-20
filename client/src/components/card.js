import React from 'react';

import gg from '../util/gradient';

function Card({ title, subTitle, styles }) {
  return (
    <div className="card" style={{ ...styles }}>
      <div className="card__bg" style={{ background: `${gg.generateGradient()}` }} />
      <div className="card__content">
        <div className="card__content__title">
          { title }
        </div>
        <div className="card__content__sub-title">
          { subTitle }
        </div>
      </div>
    </div>
  );
}

export default Card;
