// where the pages of the app are
import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Woofmate from './pages/Woofmate';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>

				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route
					path="/woofmate"
					element={<Woofmate />}
				/>
				<Route
					path="/*"
					element={<NotFound />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

function NotFound() {
	return <img src="https://httpstatusdogs.com/img/404.jpg" />;
}

export default App;