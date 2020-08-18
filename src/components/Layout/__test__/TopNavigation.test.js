import React from 'react';
import { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';
import TopNavigation from '../TopNavigation';

describe('test TopNavigation component', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
    jest.spyOn(window.location, 'assign').mockImplementation();
  });

  afterEach(() => {
    localStorage.setItem.mockRestore();
    window.location.assign.mockRestore();
    cleanup();
  });

  it('should set loggedIn as 0 in local storage after clicking on logout button', () => {
    const wrapper = shallow(<TopNavigation />);
    const button = wrapper.find('.logout-button');

    button.simulate('click');

    expect(localStorage.setItem).toHaveBeenCalledWith('loggedIn', '0');
    expect(window.location.assign).toHaveBeenCalledWith('/login');
  });
});
