import React from 'react';
import { useRouter } from 'next/router';


const Dashboard = () => {
	const router = useRouter();

	return (
		<div>
			<h1>Doggie Dashboard</h1>
			<button onClick={() => router.push('/')}>Sign Out</button>
			<button>Find Friends</button>
			<button onClick={() => router.push('/editTag')}>Edit DogTag</button>
		</div>
	);
};

export default Dashboard;
