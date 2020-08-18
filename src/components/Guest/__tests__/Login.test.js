import React from 'react';
import { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';
import Login from '../Login';

describe('test Login component', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    localStorage.setItem.mockRestore();
    cleanup();
  });

  it('should set loggedIn param in local storage after clicking on login button', () => {
    const wrapper = shallow(<Login />);
    const button = wrapper.find('button');

    button.simulate('click');

    expect(button.text()).toBe('Login');
    expect(localStorage.setItem).toHaveBeenCalledWith('loggedIn', '1');
  });
});
