import test from 'ava';
import './helpers/dom';

import StupidCards from '../src/StupidCards';

test.beforeEach(t => {
  t.context.app = new StupidCards();
  t.context.app.reset();
});

test.afterEach.always(t => {
  delete t.context.app;
});

test('Renders App', t => {
  t.plan(1);
  t.is(document.getElementsByClassName('StupidCards').length, 1);
});

test('Resets App', t => {
  t.plan(1);
  const pre = t.context.app.draws;
  document.getElementsByClassName('StupidCards')[0].click();
  const post = t.context.app.draws;
  t.notDeepEqual(pre, post);
});
