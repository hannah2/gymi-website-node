// View of the React application as a whole.
import React, { PropTypes } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import { translations } from '../messages';
import SiteLayout from './SiteLayout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import TimelinePage from './pages/TimelinePage';
import JoinUsPage from './pages/JoinUsPage';
import ContactUsPage from './pages/ContactUsPage';
import { Summer2013Page, Summer2014Page, Summer2015Page } from './pages/sessions';

export function GymiWebsiteView({ currentLanguage, defaultLanguage }) {
  // NOTE: need key on IntlProvider to trigger page rerender
  // https://github.com/yahoo/react-intl/issues/234
  return (
    <IntlProvider
      locale={currentLanguage.localeCode}
      key={currentLanguage.localeCode}
      messages={translations[currentLanguage.localeCode]}
      defaultLocale={defaultLanguage.localeCode}
    >
      <Router
        history={browserHistory}
        render={applyRouterMiddleware(useScroll())}
      >
        <Route path="/" component={SiteLayout}>
          <IndexRoute component={HomePage} />
          <Route path="aboutUs" component={AboutUsPage} />
          <Route path="timeline" component={TimelinePage} />
          <Route path="timeline/summer2013" component={Summer2013Page} />
          <Route path="timeline/summer2014" component={Summer2014Page} />
          <Route path="timeline/summer2015" component={Summer2015Page} />
          <Route path="joinUs" component={JoinUsPage} />
          <Route path="contactUs" component={ContactUsPage} />
        </Route>
      </Router>
    </IntlProvider>
  );
}

const languagePropType = PropTypes.shape({
  localeCode: PropTypes.string.isRequired,
});
GymiWebsiteView.propTypes = {
  currentLanguage: languagePropType.isRequired,
  defaultLanguage: languagePropType.isRequired,
};

// Container
// Injects state and action dispatchers into the Component, thus decoupling the
// presentation from state management.

function mapStateToProps(state) {
  return {
    currentLanguage: state.language.currentLanguage,
    defaultLanguage: state.language.defaultLanguage,
  };
}

const GymiWebsite = connect(
  mapStateToProps,
)(GymiWebsiteView);

export default GymiWebsite;
