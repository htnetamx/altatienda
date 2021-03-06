import React from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
// reactstrap components
import { Container, Row } from 'reactstrap';

// core components
import AccessNavbar from 'components/Navbars/AccessNavbar.js';
import AuthFooter from 'components/Footers/AuthFooter.js';

import routes from 'routeLogin.js';

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add('bg-default-neta');
    return () => {
      document.body.classList.remove('bg-default-neta');
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/access') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AccessNavbar />
        <div className="header bg-gradient-info py-6 py-lg-6">
          <Container>
            <div className="header-body text-center mb-7"></div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-neta"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
