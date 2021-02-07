import React from 'react';
import { get } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopNavigation from './TopNavigation';
import LeftNavigation from './LeftNavigation';
import routes from '../../../../config/routes';

const Container = ({ history }) => {
  const Header = (
    <header className="flex w-full">
      <TopNavigation history={history} />
    </header>
  );

  return (
    <>
      <div className="blobs">
        <div className="blob1" />
      </div>

      <div className="main-container">
        <aside className="flex">
          <LeftNavigation />
        </aside>

        <section className="right-container">
          {Header}

          <Switch>
            {routes.filter(route => !get(route, 'public', false))
              .map((prop, key) => (
                <Route
                  exact={!!prop.exact}
                  path={prop.path}
                  component={prop.component}
                  key={key}
                />
              ))}
          </Switch>
        </section>
      </div>
    </>
  );
};

Container.propTypes = {
  history: PropTypes.object
};

export default Container;
