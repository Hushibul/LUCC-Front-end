import React, { Fragment } from "react";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import FounderBlock from "../sections/Lucc/Community/FounderBlock";

class Founder extends React.Component {
  render() {
    return (
      <Fragment>
          <Header />
        <Breadcrumbs breadcrumb={{ pagename: "Founder" }} />
        <FounderBlock />
        <Footer />
      </Fragment>
    );
  }
}

export default Founder;
