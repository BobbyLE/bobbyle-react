import React from 'react';
import { shallow } from 'enzyme';

import ContactForm from '../../../components/front/ContactForm';
let emptyValue, handleForm, wrapper;

beforeEach(() => {
  emptyValue = '';
  handleForm = jest.fn();
  wrapper = shallow(<ContactForm onSubmit={handleForm} />);
});

test('should throw error if empty value of full name', () => {
  wrapper.find('input').at(0).simulate('change', {
    target: {value: emptyValue}
  });
  wrapper.find('form').at(0).simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state().errors.name).toBe('* Do not leave blank');
});

test('should throw error if empty value of message', () => {
  wrapper.find('textarea').at(0).simulate('change', {
    target: {value: emptyValue}
  });
  wrapper.find('form').at(0).simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state().errors.message).toBe('* Do not leave blank');
});

test('should throw error if invalid value of email', () => {
  wrapper.find('input').at(1).simulate('change', {
    target: {value: 'invalid email@'}
  });
  wrapper.find('form').at(0).simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state().errors.email).toBe('* Email is not valid');
});
