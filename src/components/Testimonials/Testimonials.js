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
import s from './Testimonials.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            <img className={s.image} width="86" height="86" src="https://venturedemo.files.wordpress.com/2015/09/person_8.jpg?w=86&amp;h=86&amp;crop=1" class="image" alt="Composition of portraits of happy people smiling" scale="0" />
            <h1 className={s.bannerTitle}>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content. This is required when, for example, the final text is not yet available.</h1>
            <p className={s.bannerDesc}>- Jonathan Smith</p>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
