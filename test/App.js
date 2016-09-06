import test from 'ava';
import {
  findDOMNode,
} from 'react-dom';
import { Simulate } from 'react-addons-test-utils';
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

test('Resets App', t => {
  t.plan(1);
  Simulate.click(findDOMNode(t.context.app));
  t.pass();
});
