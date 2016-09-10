import React, {
  Component,
} from 'react';
import Radium from 'radium';
import { autobind } from 'core-decorators';

import Card from '../Card';

import Arcana from 'arcana';
import shuffle from 'lodash.shuffle';

@Radium
export default class App extends Component {
  static styles = {
    App: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#232629',
      fontFamily: [
        'system',
        '-apple-system',
        '\\.SFNSText-Regular',
        'San Francisco',
        'Roboto',
        'Segoe UI',
        'Helvetica Neue',
        'Lucida Grande',
        'sans-serif',
      ].join(),
      fontSize: '20px',
      lineHeight: 1.6,
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
    },
    Arcana: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '0 auto',
      padding: '0 1.5rem',
      width: '100%',
    },
    MinorArcana: {
      borderTop: '2px solid #E7E7E7',
    },
  }
  static initialState = {
    decks: new Arcana,
    draws: {
      majorArcana: null,
      minorArcana: [],
    },
  }
  constructor(props) {
    super(props);
    this.state = App.initialState;
  }
  componentDidMount() {
    this.resetCards();
  }
  resetCards() {
    this.state = App.initialState;
    this.shuffleMajorArcana();
    this.shuffleMinorArcana();
    this.setState({
      draws: {
        majorArcana: this.drawMajorArcana(),
        minorArcana: [
          this.drawMinorArcana(),
          this.drawMinorArcana(),
          this.drawMinorArcana(),
        ],
      },
    });
  }
  shuffle(deck) {
    for (let i = 0; i < 8; i++) {
      this.state.decks[deck] = shuffle(this.state.decks[deck]);
    }
  }
  shuffleMajorArcana() {
    this.shuffle('majorArcana');
  }
  shuffleMinorArcana() {
    this.shuffle('minorArcana');
  }
  draw(deck) {
    return this.state.decks[deck].pop();
  }
  drawMajorArcana() {
    return this.draw('majorArcana');
  }
  drawMinorArcana() {
    return this.draw('minorArcana');
  }
  @autobind
  handleClick() {
    this.resetCards();
  }
  render() {
    return (
      <div className="App" style={[App.styles.App]} onClick={this.handleClick}>
        <div className="MajorArcana" style={[App.styles.Arcana, App.styles.MajorArcana]}>
          {this.state.draws.majorArcana && <Card {...this.state.draws.majorArcana} />}
        </div>
        <div className="MinorArcana" style={[App.styles.Arcana, App.styles.MinorArcana]}>
          {this.state.draws.minorArcana.map((card, index) => <Card key={index} {...card} />)}
        </div>
      </div>
    );
  }
}
