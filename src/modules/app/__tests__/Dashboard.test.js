import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import Dashboard from '../components/Dashboard';
import store from '../../../store';

const configuredStore = store();

describe('the Dashboard component', () => {
  it('should render Dashboard component without crashing', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    mount(
      <Provider store={configuredStore}>
        <Router>
          <Dashboard />
        </Router>
      </Provider>
    );

    useDispatchSpy.mockClear();
  });
});
