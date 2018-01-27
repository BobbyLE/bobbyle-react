import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../../components/admin/LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot()
});