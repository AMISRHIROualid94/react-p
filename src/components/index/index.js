import React from 'react';

import {About} from '../About/index';
import {Footer} from '../Footer/index';
import {Home} from '../Home/index';
import {Portfolio} from '../Portfolio/index';
import Profile from '../Profile/index';
import {SocialMedia} from '../SocialMedia/index';
import Work from '../Work/index';

class Index extends React.Component {
  render(){
  return (
    <div>
      <Home/>
      <Work/>
      <Portfolio/>
      <Profile/>
      <About/>
      <SocialMedia/>
      <Footer/>
    </div>
  )}
}

export default Index;
