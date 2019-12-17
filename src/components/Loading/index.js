import React from 'react'
import {Spin} from 'antd'

import './index.scss'

export default props => {
    return (
        <div className="loading-wrap">
            <Spin size="large"/>
        </div>
    )
}
