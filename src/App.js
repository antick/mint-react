import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Dashboard from "./components/Dashboard/Dashboard";
import TopNavigation from "./components/Navigation/TopNavigation";
import LeftNavigation from "./components/Navigation/LeftNavigation";
import RightNavigation from "./components/Navigation/RightNavigation";

function App() {
  return (
    <Router>
      <div className="flex">
        <aside className="flex">
          <LeftNavigation />
        </aside>

        <section className="flex flex-col w-full">
          <header className="flex w-full">
            <TopNavigation />
          </header>

          <div className="pl-8 pr-12 pt-5">
            <Route exact path="/" component={Dashboard} />
            <Route path="/books" component={RightNavigation} />
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
