import "./App.css";
import { Nav } from "./components/nav/nav";
import { Home } from "./components/containers/home/home";
import { Services } from "./components/containers/services/services";
import { Workshops } from "./components/containers/workshops/workshops";
import { Team } from "./components/containers/team/team";
import { Resources } from "./components/containers/resources/resources";
import { Contact } from "./components/containers/contacts/contact";
import { Privacy } from "./components/nav/footerLinks/privacy";
import { Disclaimer } from "./components/nav/footerLinks/disclaimer";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<Nav />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/services' component={Services} />
					<Route path='/workshops' component={Workshops} />
					<Route path='/team' component={Team} />
					<Route path='/resources' component={Resources} />
					<Route path='/contact' component={Contact} />
					<Route path='/privacy' component={Privacy} />
					<Route path='/disclaimer' component={Disclaimer} />
				</Switch>
			</HashRouter>
			<div className='footer'>
				<a href='/privacy' target='_blank' rel='noreferrer'>
					Privacy Policy
				</a>{" "}
				|{" "}
				<a href='/disclaimer' target='_blank' rel='noreferrer'>
					Disclaimer
				</a>{" "}
				|{" "}
				<a
					href='https://reports.adviserinfo.sec.gov/reports/ADV/294012/PDF/294012.pdf'
					target='_blank'
					rel='noreferrer'
				>
					ADV Form
				</a>{" "}
				| <a href='/contact'>Contact Us</a>
				<p className='footer-disclaimer'>
					The information you obtain at this site is not, nor is it intended to
					be, legal advice. You should consult an attorney for advice regarding
					your individual situation. We invite you to contact us and welcome
					your calls, letters and electronic mail. Contacting us does not create
					an attorney-client relationship. Please do not send any confidential
					information to us until such time as an attorney-client relationship
					has been established.
				</p>
				<p className='copy-right'>
					© 2021 by Elder Law Management. All rights reserved.
				</p>
			</div>
		</div>
	);
}

export default App;
