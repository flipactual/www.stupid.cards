import Arcana from 'arcana';
import capitalize from 'lodash.capitalize';
import shuffle from 'lodash.shuffle';

export default class StupidCards {
  constructor() {
    this.elements = {};
    this.fragments = {};
    this.elements.root = document.getElementsByTagName('main')[0];
    this.elements.root.addEventListener('click', this.reset.bind(this));
    this.elements.majorArcana = document.createElement('section');
    this.elements.majorArcana.className = 'Arcana MajorArcana';
    this.elements.minorArcana = document.createElement('section');
    this.elements.minorArcana.className = 'Arcana MinorArcana';
    const app = document.createElement('div');
    app.className = 'StupidCards';
    app.appendChild(this.elements.majorArcana);
    app.appendChild(this.elements.minorArcana);
    this.elements.root.appendChild(app);
  }
  reset() {
    this.resetCards();
    this.renderCards();
  }
  renderCards() {
    this.elements.majorArcana.innerHTML = '';
    this.elements.minorArcana.innerHTML = '';
    const majorArcanaCard = document.createElement('span');
    majorArcanaCard.className = 'Card';
    majorArcanaCard.textContent = this.draws.majorArcana.name.toUpperCase();
    this.elements.majorArcana.appendChild(majorArcanaCard);
    this.draws.minorArcana.forEach(card => {
      const minorArcanaCard = document.createElement('span');
      minorArcanaCard.className = 'Card';
      minorArcanaCard.textContent = `${capitalize(card.name)} of ${capitalize(card.suit)}`;
      this.elements.minorArcana.appendChild(minorArcanaCard);
    });
  }
  resetCards() {
    this.decks = new Arcana();
    this.shuffleMajorArcana();
    this.shuffleMinorArcana();
    this.draws = {
      majorArcana: this.drawMajorArcana(),
      minorArcana: [
        this.drawMinorArcana(),
        this.drawMinorArcana(),
        this.drawMinorArcana(),
      ],
    };
  }
  shuffle(deck) {
    for (let i = 0; i < 8; i += 1) {
      this.decks[deck] = shuffle(this.decks[deck]);
    }
  }
  shuffleMajorArcana() {
    this.shuffle('majorArcana');
  }
  shuffleMinorArcana() {
    this.shuffle('minorArcana');
  }
  draw(deck) {
    return this.decks[deck].pop();
  }
  drawMajorArcana() {
    return this.draw('majorArcana');
  }
  drawMinorArcana() {
    return this.draw('minorArcana');
  }
}
