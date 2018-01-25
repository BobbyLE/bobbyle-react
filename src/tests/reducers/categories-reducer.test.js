import React from 'react';
import { shallow } from 'enzyme';

import categoriesReducer from '../../reducers/categories-reducer';
import categoriesFixture from '../fixtures/categories-fixtures'

test('should set default state', () => {
  const state = categoriesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should set categories', () => {
  const action = {
    type: 'SET_CATEGORIES',
    categories: categoriesFixture[0]
  }
  const state = categoriesReducer(categoriesFixture , action);
  expect(state).toEqual(categoriesFixture[0]);
})