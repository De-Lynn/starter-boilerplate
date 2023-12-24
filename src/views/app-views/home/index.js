import Loading from 'components/shared-components/Loading'
import React, { Suspense, lazy } from 'react'
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'

const Home = ({match}) => {
	return (
		<Suspense fallback={<Loading cover='content' />}>
			<Switch>
				<Redirect exact from={`${match.url}`} to={`${match.url}/clients`}/>
				<Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))}/>
			</Switch>
		</Suspense>
	)
}

export default Home
