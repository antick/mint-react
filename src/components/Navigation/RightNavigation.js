import React, {Component} from 'react';
import Svg from "../shared/Svg";

class RightNavigation extends Component {
  render() {
    return (
      <div className="flex flex-col w-24 text-gray-700 min-h-screen justify-center">
        <div className="flex justify-center pt-8">
          <Svg name="cog" classes="link" />
        </div>
        <div className="flex justify-center pt-8">
          <Svg name="archive" classes="link" />
        </div>
        <div className="flex justify-center pt-8">
          <Svg name="bookmarks" classes="link" />
        </div>
        <div className="flex justify-center pt-8">
          <Svg name="briefcase" classes="link" />
        </div>
        <div className="flex justify-center pt-8">
          <Svg name="calculator" classes="link" />
        </div>
        <div className="flex justify-center pt-8">
          <Svg name="calendar" classes="link" />
        </div>
        <div className="flex justify-center pt-8">
          <Svg name="mail" classes="link" />
        </div>
        <div className="flex justify-center pt-8">
          <Svg name="wallet" classes="link" />
        </div>
      </div>
    );
  }
}

export default RightNavigation;
