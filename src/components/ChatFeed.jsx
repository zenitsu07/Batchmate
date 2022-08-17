import { useReducer } from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed =(props) =>{

    console.log({props})
    
        //destructure th3e props to get what is required to render our component
    const { chats, activeChat, userName, messages } = props
        
        //userName = username of projet admin i.e. zenitsu07
    
    const chat = chats && chats[activeChat]
        
        //If chats exist i.e. condtion (chats give true if nonempty) then find active Chat inside of chats array
        // console.log(chat ,userName ,messages)

        //tofdo How to handle each message sent and recieved by two components avaialbe myMessage and TheirMessage
    
    const renderMessages = () => {
        
        const keys = Object.keys(messages);

            //keys are = ids of each particular message sent or received
        
            //todo Now pass down each message from messages array with a specific key to a const variable

        return keys.map((key, index ) => {
            
            const message = messages[key];//*Used as a prop to pass the message down

            const lastMessageKey = index === 0 ? null : keys[index-1] // If it is last message in chat feed then its key = Id of that message and index = key-1 
            
                //*implying find last message

            const isMyMessage = userName === message.sender.username;
                
                    //* it checks the message identity 
                
                    //todo using if((userName === message.sender.username)==true)
                
                    //* Following div returns the message

            return(
                     
                <div key={`msg_${index}`} style = {{width :'100%'}}>

                    <div className='Message-block'>

                            {/* //* ternary operator --- If its my messgae MyMessage componenet is rendered else TheirMessage is rendered */}
                        {
                            isMyMessage 
                            ? <MyMessage message = {message} />
                            : <TheirMessage message = {message} lastMessage = {message[lastMessageKey]}  />
                        }
                    </div>
                    
                    <div className='read-receipts' style = {{ marginRight: isMyMessage? '18px' : '0px' , marginLeft: isMyMessage? '0px': '70px'}}>

                        <br />read-receipts

                    </div>

                </div>
            )
        }
        )
    }

    if(!chat){
        return ' Processing ...'
    }
        //? condition ensures that below return statements only run when I Have my chats to access 

    return(

            //* 1->create a chat -title div to render the title of chatfeed
        <div className='chat-feed'>
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title} </div>

                <div className = "chat-subtitle">
                    {chat.people.map((person) =>  `${person.person.username}` )}
                </div>

            </div>

                {/*  now call it */}

            {renderMessages()}
                
                {/* use self closing div to leave the space off */}
            
            <div style={{height: '100px'}} />
            Why its called puzzles

            <div className="message-form-container">
                <MessageForm {...props}  chatId = {activeChat}/>
            </div>
        </div>
    )
}
export default ChatFeed;
//?No need to import react  