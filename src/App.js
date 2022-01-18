import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { loadUser } from "../src/actions/userAction";
import { useSelector, useDispatch } from "react-redux";

// Preloader
import Preloader from "./components/layouts/Preloader";
// Pages
import Home from "./components/pages/Home";
import Bloggrid from "./components/pages/Bloggrid";
import Blogstandard from "./components/pages/Blogstandard";
import Blogdetail from "./components/pages/Blogdetail";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Founder from "./components/pages/Founder";
import Advisor from "./components/pages/Advisor";
import ExecutiveMemeber from "./components/pages/ExecutiveMember";
import Events from "./components/pages/Events";
import LoginForm from "./components/sections/Lucc/Form/form1";
import EventsForm from "./components/sections/Lucc/Form/form2";

import Lu_login from "../src/components/pages/Lu_login";
import Profile from "../src/components/pages/Profile";
import Edit_profile from "../src/components/pages/edit_profile";

import Lucc_Registration2 from "../src/components/pages/Lucc_Registration2";
import Lucc_Login2 from "../src/components/pages/Lucc_Login2";
import PrivateRoute from "../src/HOC/PrivateRoute";

// -----------event-------
import Login1 from "../src/components/pages/Login1";
import RegistrationForm1 from "../src/components/pages/RegistrationForm1";
import Events_site from "./event/Event/Index";
import Auth_eventRoute from "../src/HOC/Auth_event";
import Events_LU_user_reg_form from "./event/Event/component/reg_form/LU_user_reg_form";
import Events_Non_LU_user_form from "./event/Event/component/reg_form/Non_LU_user_form";
import Events_profile_form_reg from "./event/Event/component/reg_form/profile_form_reg";

import Member1 from "./event/Event/component/reg_form/LU member/member1";
import Member2 from "./event/Event/component/reg_form/LU member/member2";
import Member3 from "./event/Event/component/reg_form/LU member/member3";
import Member4 from "./event/Event/component/reg_form/LU member/member4";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  //  const ID = JSON.parse(localStorage.getItem('user'));
  //  const[id,setState]=useState('')

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(loadUser());
      //  console.log('from admin app')
    }
  }, [isAuthenticated]);

  return (
    <Router>
      {/* <Regform/>
      <Member4></Member4> */}
      <Preloader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/bloggrid" component={Bloggrid} />
        <Route path="/blogstandard" component={Blogstandard} />
        <Route path="/blogdetail" component={Blogdetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/founder" component={Founder} />
        <Route path="/advisor" component={Advisor} />
        <Route path="/executive" component={ExecutiveMemeber} />
        <Route path="/events" component={Events} />
        <Route path="/loginform" component={LoginForm} />
        <Route path="/eventform" component={EventsForm} />
        <Route path="/eventsite" component={Events_site} />
        <Route path="/login" component={Lu_login} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/edit_profile" component={Edit_profile} />
        <Route path="/login1" component={Login1} />
        <Route path="/registration" component={RegistrationForm1} />
        <Route path="/registration2" component={Lucc_Registration2} />
        <Route path="/login2" component={Lucc_Login2} />
        {/* ------------event --------- */}
        <Auth_eventRoute
          path="/event_registration_lu"
          component={Events_LU_user_reg_form}
        />
        <Auth_eventRoute
          path="/event_registration_non_lu"
          component={Events_Non_LU_user_form}
        />
        <Route
          path="/event_profile_form_reg"
          component={Events_profile_form_reg}
        />
        <Auth_eventRoute path="/event_member_form1" component={Member1} />
        <Auth_eventRoute path="/event_member_form2" component={Member2} />
        <Auth_eventRoute path="/event_member_form3" component={Member3} />
        <Auth_eventRoute path="/event_member_form4" component={Member4} />
        Member1 Events_profile_form_reg
      </Switch>
    </Router>
  );
}

export default App;
