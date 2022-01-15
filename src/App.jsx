import React from 'react';
import { GlobalProvider } from './localState/GlobalProvider';
import Navigation from './components/Navigation';
// import Home from './pages/Home';
import NavList from './components/NavList';

function App() {

	return(
      <>
				<Navigation />
				<NavList />
        {/* <Home />  */}
      </>
    )
}

function AppWithState(props) {
	return(
		<GlobalProvider>
			<App />
		</GlobalProvider>
	)
}
export default AppWithState;
