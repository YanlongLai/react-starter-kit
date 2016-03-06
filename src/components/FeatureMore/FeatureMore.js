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
import s from './FeatureMore.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            <div className={s.opacityWindow}>
              <h1 className={s.bannerTitle}>Systems Integration</h1>
              <p className={s.bannerDesc}>In today’s connected world, the role of system integration engineers is important: more and more systems are designed to connect.</p>
              <div className={s.moreLink}>Read More</div>
            </div>
          </div>
          <div className={s.bannerMiddle}>
            <div className={s.opacityWindow}>
              <h1 className={s.bannerTitle}>Product & Graphic Design</h1>
              <p className={s.bannerDesc}>The concept of the Design Cycle describes the reflective and repetitive structure of design processes, assuming that this structure is underlying all such processes.</p>
              <div className={s.moreLink}>Read More</div>
            </div>
          </div>
          <div className={s.bannerRight}>
            <div className={s.opacityWindow}>
              <h1 className={s.bannerTitle}>Product & Graphic Design</h1>
              <p className={s.bannerDesc}>The concept of the Design Cycle describes the reflective and repetitive structure of design processes, assuming that this structure is underlying all such processes.</p>
              <div className={s.moreLink}>Read More</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
