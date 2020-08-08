import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Svg from "../shared/Svg";

class LeftNavigation extends Component {
  render() {
    const leftNavigationData = [
      { icon: "book", title: "Books", link: "/books" },
      { icon: "cog", title: "Cog" },
      { icon: "archive", title: "Archive" },
      { icon: "bookmarks", title: "Bookmarks" },
      { icon: "briefcase", title: "Briefcase" },
      { icon: "calculator", title: "Calculator" },
      { icon: "calendar", title: "Calendar" },
      { icon: "mail", title: "Mail" },
      { icon: "wallet", title: "Wallet" },
    ];

    const leftNavigationLinks = leftNavigationData.map(menu => {
      return (
        <Link to={menu.link}>
          <div className="flex justify-center pt-8" title={menu.title}>
            <Svg name={menu.icon} classes="nav-link" />
          </div>
        </Link>
      );
    });

    return (
      <nav className="left-nav flex pt-10 flex-col w-40 min-h-screen">
        <Link to={"/"}>
          <div className="flex justify-center">
            <Svg name="home" classes="w-16 h-16 text-white" />
          </div>
        </Link>
        <div className="flex flex-col pt-16">
          { leftNavigationLinks }
        </div>
      </nav>
    );
  }
}

export default LeftNavigation;
