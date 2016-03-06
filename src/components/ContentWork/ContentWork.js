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
import s from './ContentWork.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Our Recent Work</h1>
            <p className={s.bannerDesc}>This is required when, for example, the final text is not yet available. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content.</p>
          </div>
        </div>
        <div className={s.imageContainer}>
          <div className={s.article}>
            <img width="100%" height="100%" src="https://venturedemo.files.wordpress.com/2015/09/venture_24.jpg?w=800&amp;h=560&amp;crop=1" class="attachment-venture-standard-image size-venture-standard-image wp-post-image" alt="Reading" scale="0" />
          </div>    
          <div className={s.article}>
            <img width="100%" height="100%" src="https://venturedemo.files.wordpress.com/2015/09/venture_23.jpg?w=800&amp;h=560&amp;crop=1" class="attachment-venture-standard-image size-venture-standard-image wp-post-image" alt="Reading" scale="0" />
          </div>    
          <div className={s.article}>
            <img width="100%" height="100%" src="https://venturedemo.files.wordpress.com/2015/09/fortune_21.jpg?w=800&amp;h=560&amp;crop=1" class="attachment-venture-standard-image size-venture-standard-image wp-post-image" alt="Reading" scale="0" />
          </div>
           <div className={s.article}>
            <img width="100%" height="100%" src="https://venturedemo.files.wordpress.com/2015/09/venture_22.jpg?w=800&amp;h=560&amp;crop=1" class="attachment-venture-standard-image size-venture-standard-image wp-post-image" alt="Reading" scale="0" />
          </div>    
          <div className={s.article}>
            <img width="100%" height="100%" src="https://venturedemo.files.wordpress.com/2015/09/venture_20.jpg?w=800&amp;h=560&amp;crop=1" class="attachment-venture-standard-image size-venture-standard-image wp-post-image" alt="Reading" scale="0" />
          </div>    
          <div className={s.article}>
            <img width="100%" height="100%" src="https://venturedemo.files.wordpress.com/2015/09/venture_21.jpg?w=800&amp;h=560&amp;crop=1" class="attachment-venture-standard-image size-venture-standard-image wp-post-image" alt="Reading" scale="0" />
          </div>    
        </div>
      </div>
    );
  }

}

export default withStyles(Header, s);
