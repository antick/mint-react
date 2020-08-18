import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from '../User/Dashboard';
import TopNavigation from './TopNavigation';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';

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
              <Route exact path="/" component={Dashboard} />
              <Route path="/books" component={RightNavigation} />
            </Switch>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default Main;
