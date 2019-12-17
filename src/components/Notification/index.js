import React, { useEffect } from 'react'
import {notification} from 'antd'

const typeMap = new Map([
    [0, 'success'],
    [1, 'error']
])

export default ({type, content, clear_msg}) => {
    useEffect(() => {
        if(!!content) {
            const notificationType = typeMap.get(type)
            notification[notificationType]({
                message: '提示',
                description: content,
                duration: 2,
                onClose: () => {
                    clear_msg && clear_msg()
                }
            })
        }
    }, [type, content])
    return null
}

