import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
// TODO: Enable this once they release it for react 17
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const MockResponsiveContainer = props => <div {...props} />;

// Mocking and fixing the recharts warning in test suits
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: MockResponsiveContainer
}));
