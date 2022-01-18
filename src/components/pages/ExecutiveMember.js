import React, { Fragment } from "react";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
import ExecutiveBlock from "../sections/Lucc/Community/ExecutiveBlock";

class ExecutiveMemeber extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Breadcrumbs breadcrumb={{ pagename: "Executive Member" }} />
        <ExecutiveBlock />
        <Footer />
      </Fragment>
    );
  }
}

export default ExecutiveMemeber;
