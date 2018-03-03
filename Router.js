import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home';


const RouterComponent = () => {
	return(
		<Router>
			<Scene key="Calc">
				<Scene key="Home" component={Home} hideNavBar initial />
				<Scene key="Formulae" onBack={()=>Actions.Home()} component={Formulae} title="Formulae"/>
			</Scene>
		</Router>
	)
};


export default RouterComponent;