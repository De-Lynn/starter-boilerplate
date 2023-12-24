import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { connect } from 'react-redux';
import { selectedUserChange } from 'redux/actions/Users';
import EditProfileContainer from './EditProfile';

export class UserList extends Component {
    location = '/app/main/clients/list'

	constructor(props) {
		super(props)
		this.state = {
			users: [],
			userProfileVisible: false,
			selectedUser: this.props.selectedUser,
		}
	}

    getUsers = () => {
        const response = axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data)
        return response
    }

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.props.selectedUserChange(userInfo)
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo,
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
        });
	}

	componentDidUpdate(prevProps, prevState) {
		if ((prevState.selectedUser !== this.state.selectedUser || prevProps.selectedUser !== this.props.selectedUser) && this.state.selectedUser !== null) {
			this.props.history.push(`${this.location}/client/${this.state.selectedUser.id}`)
		}
	}
	  

	render() {
        
        if (this.state.users.length === 0) this.getUsers().then(data =>this.setState({users: data}))

		const { users, userProfileVisible, selectedUser } = this.state;
        
		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex" onClick={() => {this.showUserProfile(record)}}>
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
					
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
				sorter: {
					compare: (a, b) => a.website.length - b.website.length,
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
                render: company => (<span>{company.name}</span>),
				sorter: (a, b) => a.company.name.length - b.company.name.length
			},
			{
				title: 'Phone number',
				dataIndex: 'phone',
                render: phone => (<span>{phone}</span>),
				sorter: (a, b) => a.phone - b.phone,
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
                <Switch>
					<Route path={`${this.location}/client/:id`}>
						<EditProfileContainer location={this.location} history={this.props.history}/>
					</Route>
                    <Route path={`${this.location}`}>
                        <Table columns={tableColumns} dataSource={users} rowKey='id' />
                    </Route>
                </Switch>
            </Card>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		selectedUser: state.users.selectedUser,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectedUserChange: (user) => {
			dispatch(selectedUserChange(user))
		}
	}
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)
export default UserListContainer
