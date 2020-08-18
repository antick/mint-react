import React from 'react';
import { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Register from '../Register';

describe('test Register component', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    localStorage.setItem.mockRestore();
    cleanup();
  });

  it('should set loggedIn as 1 in local storage after clicking on register button', () => {
    const wrapper = shallow(<Register />);
    const button = wrapper.find('.login-button');

    button.simulate('click');

    expect(localStorage.setItem).toHaveBeenCalledWith('loggedIn', '1');
  });
});
