import React from 'react';
import './styles/Main.css';

import ExperiencePage from './ExperiencePage.js';
import AboutPage from './AboutPage.js';
import SkillPage from './SkillPage.js';
import HomePage from './HomePage.js';

import {
  Switch,
  Route,
} from 'react-router-dom';

const pages = [
  {id: 1, title: 'Experience', path: '/experience', component: ExperiencePage},
  {id: 2, title: 'Skill', path: '/skill', component: SkillPage},
  {id: 3, title: 'About', path: '/about', component: AboutPage},
  {id: 4, title: 'Home', path: '/', component: HomePage}
]

function Main() {
  const page = pages.map((page) =>
    <Route key={page.id}
      path={page.path}
      component={page.component}/>
  );

  return (
    <Switch>
      {page}
    </Switch>
  );
}

export default Main;
