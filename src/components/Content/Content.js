/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Content.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Technology & Design Studio</h1>
            <p className={s.bannerDesc}>This is required when, for example, the final text is not yet available. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a ready-made text to sing with the melody.</p>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
