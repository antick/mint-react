import React from 'react';
import { get } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopNavigation from './TopNavigation';
import LeftNavigation from './LeftNavigation';
import routes from '../../../../config/routes';

const MainContainer = ({ history }) => {
  const Header = (
    <header className="flex w-full">
      <TopNavigation history={history} />
    </header>
  );

  return (
    <div className="main-container">
      <aside className="flex">
        <LeftNavigation />
      </aside>

      <section className="flex flex-col w-full">
        {Header}

        <div className="pl-4 pr-12 pt-1">
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
        </div>
      </section>
    </div>
  );
};

MainContainer.propTypes = {
  history: PropTypes.object
};

export default MainContainer;
