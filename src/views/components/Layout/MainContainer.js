import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopNavigation from './TopNavigation';
import LeftNavigation from './LeftNavigation';
import routes from '../../routes';

const MainContainer = ({ history }) => {
  const Header = (
    <header className="flex w-full">
      <TopNavigation history={history} />
    </header>
  );

  return (
    <div className="flex">
      <aside className="flex">
        <LeftNavigation />
      </aside>

      <section className="flex flex-col w-full">
        {Header}

        <div className="pl-8 pr-12 pt-1">
          <Switch>
            {routes.map((prop, key) => (
              <Route
                exact={prop.exact}
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
