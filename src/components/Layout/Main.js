import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import LeftNavigation from './LeftNavigation';
import routes from '../routes';

const Main = () => {
  const Header = (
    <header className="flex w-full">
      <TopNavigation />
    </header>
  );

  return (
    <Router>
      <div className="flex">
        <aside className="flex">
          <LeftNavigation />
        </aside>

        <section className="flex flex-col w-full">
          {Header}

          <div className="pl-8 pr-12 pt-5">
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
    </Router>
  );
};

export default Main;
