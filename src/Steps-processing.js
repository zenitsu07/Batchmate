import TheirMessage from "./components/TheirMessage"

//? Make the chatfeed your own UI to show
step - 1 
//?we take in all props involbeved in chatfeed named chatApp Props
//? then spreaded alll props coming from engine
//using spread operator
//? Used to pass all props at once
      //render your own component for chatfeef by taking in chatAppProps as prop 
    //  renderChatFeed={(chatAppProps) => 
    //   <ChatFeed {...chatAppState} 
 
//todo  step -2-> 
//todoBuild 3 components andimport them all inside ChatfEED COMPONENT to use them 

// ? PART-1
//! COMPONENT - CHatFeed.js ->
//todo Now create a renderMessages that render the messages using key
//?for which we reuire 
//? 1- message string
//? 2- last message
//? isMyMesasage or Not
// Now for renderign chat feed
  
  //todo Step-1->     
  //? Put a condition which ensures that below return statements only run when I Have my chats to access 
   //* 2-> create a chat -title div to render the title of chatfeed
  //Now I can accwss chat title for each new chat created using .title class which acts as variable to be 
  // So putting conditition like 
  //? {Chat?. title} => ensures that if chat is created then only access its title to show in sub title of Feed 
  //? Now create div for chat subtitle which contains username of all people by mapping through {chat.people} array 
  //? AND SETTING THAT TO SUBTITLE THEN 
  //? you canstart rendering their message to show on Chatfeef once chat subttile displayed of who is messaging
  //* 3-> Call renderMessages() after setting each username to subtitle
  //* 4-> Add a Message form containing chats
  //* Pass the required props to Messageform and pass the activechat as ChatId
  //? Now its time to Build other 3 components as well starting with MyMessage and theirMessage

  //! TheirMessage Component ::
  //* 1-> Check if its first message by user in activeChat of ChatFeed
  //* for exampe if its his first msg then We need to first show his username and avatar then his message-row 
  //* contained inside of message-row div  
