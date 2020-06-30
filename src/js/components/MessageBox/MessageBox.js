import React from 'react';

const MessageBox = props => <div className={"message-box message-box-" + props.status}>{props.message}</div>;

export default MessageBox;