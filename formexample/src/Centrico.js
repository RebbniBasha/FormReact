import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Redirect, Route
} from "react-router-dom";
import LoginForm from './containers/LoginForm';
import AccCreation from './AccCreation'
import { Home } from './Home'
import { About } from './About'
import { Services } from './Services'
import { NoMatch } from './NoMatch'
import { NavigationBar } from './NavigationBar'

class Centrico extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={LoginForm} />
                        <Route path="/accCreate" component={AccCreation}/>
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/home" component={Home} />
                        <Route component={NoMatch} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }

}
export default Centrico;
