import React from 'react'
import {connect} from 'react-redux'
import Loading from './components/Loading'
import Notification from './components/Notification'
import Todo from './components/Todo'
import {actions} from './store/reducers/app'

function App(props) {
    const {isFetching, msg, clear_msg} = props,
        { type, content = ''} = msg
    return (
        <>
            <Todo/>
            {isFetching && <Loading />}
            <Notification
                clear_msg={clear_msg}
                type={type}
                content={content}/>
        </>
    );
}

export default connect(
    state => state.app,
    actions
)(App)
