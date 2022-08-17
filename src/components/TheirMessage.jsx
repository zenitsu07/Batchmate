//theory summary-
// props as message and lastmessage
// declaring a const to check if its first message by user on the basis of if its first then lastmessage must not match this user's username
// returning a div message row containing 
// 1st ->  



const TheirMessage = ({message} , {lastMessage} ) => {

    const isFirstMessageByUser = !(lastMessage) || (lastMessage.sender.username !==  message.sender.username) 
    //? its first msged by other person if last msg is not !!!!!
       
    return(

        <div className="message-row">

                {/* //?check if its first message by user */}
                {/* //* 1st part */}
            { 
                isFirstMessageByUser && (

                    <div className="message-avatar"
                    //? message.sender.avatar = avatar of sender
                    style={{background: `url(${message?.sender?.avatar})`}}// `?` this question mark checks the objects's existence
                    />
                    //self closing div- can be
                )
            }
            {/* if its an attachment */}
                
                {message?.attachment?.length > 0
                    ? (
                        <img
                        src={message.attachment[0].file}
                        alt = "message-attachment"
                        className="message-image"
                            style={{marginLeft: isFirstMessageByUser ? "4px" : "48px"}}
                        >
                        </img>
                    )
                    : (
                        <div className="message" style={{ float:'left' , backgroundColor: '#D98B90'}}>
                            {message.text}
                        </div>
                    )
                }
        </div>
    );
}

export default TheirMessage
