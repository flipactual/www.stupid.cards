import test from 'ava';
import {
  findDOMNode,
} from 'react-dom';
import './helpers/dom';
import getApp from './helpers/getApp';

test.beforeEach(async t => {
  t.context.app = getApp();
});

test.afterEach.always(async t => {
  delete t.context.app;
});

test('Renders App', t => {
  t.plan(1);
  t.is(findDOMNode(t.context.app).className, 'App');
});
