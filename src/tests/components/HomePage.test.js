import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../components/HomePage';

test('should correctly render HomePage', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toMatchSnapshot();
});
