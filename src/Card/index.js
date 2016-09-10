import React, {
  Component,
  PropTypes,
} from 'react';
import Radium from 'radium';

import capitalize from 'lodash.capitalize';

@Radium
export default class Card extends Component {
  static styles = {
    Card: {
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    MinorCard: {
      height: '33.33%',
    },
    MajorCardName: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  }
  static propTypes = {
    arcana: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    suit: PropTypes.string,
  }
  render() {
    const {
      arcana,
      name,
      suit,
    } = this.props;
    return (
      <div
        className="Card"
        style={[
          Card.styles.Card,
          Card.styles[`${capitalize(arcana)}Card`],
        ]}
      >
        <span>
          <span
            className="CardName"
            style={[
              Card.styles.CardName,
              Card.styles[`${capitalize(arcana)}CardName`
            ]]}
          >
            {arcana === 'major' ? name.toUpperCase() : capitalize(name)}
          </span>
          {suit &&
            <span
              className="CardSuit"
              style={[
                Card.styles.CardSuit,
                Card.styles[`${capitalize(arcana)}CardSuit`],
              ]}
            >
              {` of ${capitalize(suit)}`}
            </span>
          }
        </span>
      </div>
    );
  }
}
