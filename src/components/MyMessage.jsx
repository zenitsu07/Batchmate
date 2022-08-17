const MyMessage = ({message} ) => {
    // if our msg is image or text 
    //? `?` it question variable's existence
    console.log(message.text)
    if( message?.attachment?.length > 0 ){
        return(
            <img
            src={message.attachment[0].file}
            alt="File-attachment"
            className="message-image"
            style={
                {float:'right'}
            }
            />
        )
    }
    return(

        <div className="message" style={{float:'right', marginRight:'18px' , color: 'white' , backgroundColor: '#D98B99'}}>
            {message.text}
        </div>
    )
}
export default MyMessage;

// * TIP -> Parenthesis are used to group multiline of codes on JavaScript return statement
// * so to prevent semicolon inserted automatically in the wrong place.