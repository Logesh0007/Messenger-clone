import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@mui/material';
import './Message.css'

const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className='whole-card-field'>
            <div className='card-field'>
                <div id={isUser ? 'msg-admin' : 'msg-user'}>
                    <Card id={isUser ? 'msg-card' : 'msg-guest-card'}>
                        <CardContent id='card-cont'>
                            <Typography variant='h5' component='h2' id='msg'>
                                {!isUser && `${message.username || 'Unknown'}: `}{message.message}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
})

export default Message