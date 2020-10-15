import React, { Component } from 'react'
import { connect } from 'react-redux';
import function from '../../../../React-Redux-Boilerplate/dev/js/reducers/reducer-active-user';
import { logout } from '../../store/actions/auth';

class Logout extends Component {
    componentDidMount() {
        this.props.logout()
    }
    
    render() {
        return (
            <div>
                <Redirect to={'/'}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)