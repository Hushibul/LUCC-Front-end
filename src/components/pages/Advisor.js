import React, { Fragment } from "react";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import AdvisorBlock from "../sections/Lucc/Community/AdvisorBlock";

class Advisor extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Breadcrumbs breadcrumb={{ pagename: "Advisor" }} />
        <AdvisorBlock />
        <Footer />
      </Fragment>
    );
  }
}

export default Advisor;
