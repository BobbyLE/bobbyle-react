import React from 'react';
import { shallow } from 'enzyme';

import CategoryForm from '../../../components/admin/CategoryForm';


test('should throw error if empty value of category name', () => {
  const value = '';
  const handleForm = jest.fn();
  const wrapper = shallow(<CategoryForm onSubmit={handleForm}/>);
  wrapper.find('input').at(0).simulate('change', { 
    target: {value}
  });
  wrapper.find('form').at(0).simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).not.toBe('');

});

test('should throw error if invalid value category name with space at the beginning and at the ending', () => {
  const value = ' value with spaces ';
  const handleForm = jest.fn();
  const wrapper = shallow(<CategoryForm onSubmit={handleForm}/>);
  wrapper.find('input').at(0).simulate('change', { 
    target: {value}
  });
  wrapper.find('form').at(0).simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).not.toBe('');
});


test('should not throw error if valid value of category name', () => {
  const value = 'Valid Category Name';
  const handleForm = jest.fn();
  const wrapper = shallow(<CategoryForm onSubmit={handleForm}/>);
  wrapper.find('input').at(0).simulate('change', { 
    target: {value}
  });
  wrapper.find('form').at(0).simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
});