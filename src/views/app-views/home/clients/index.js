import Loading from 'components/shared-components/Loading'
import React, { Suspense, lazy } from 'react'
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom'
import { Route, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const UserList = lazy(() => import(`./list`))

const Clients = ({match}) => {
	let history = useHistory()
	return (
		<Suspense fallback={<Loading cover='content' />}>
			<Switch>
				<Redirect exact from={`${match.url}`} to={`${match.url}/list`}/>
				{/* <Route path={`${match.url}/list`} component={}/> */}
				<Route path={`${match.url}/list`}>
					<UserList history={history}/>
				</Route>
			</Switch>
		</Suspense>
	)
}

export default Clients