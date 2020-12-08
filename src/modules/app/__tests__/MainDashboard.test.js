import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import MainDashboard from '../components/MainDashboard';
import store from '../../../store';

const configuredStore = store();

describe('test MainDashboard component', () => {
  it('should render MainDashboard component without crashing', () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    mount(
      <Provider store={configuredStore}>
        <Router>
          <MainDashboard/>
        </Router>
      </Provider>
    );

    useDispatchSpy.mockClear();
  });
});
