import { useState } from "react"
import { sendMessage, isTyping } from "react-chat-engine"
import { SendOutlined } from "@ant-design/icons"
import { PictureOutlined } from "@ant-design/icons"

const MessageForm = (props) =>{

     const [value, setValue] = useState('')
     const {chatId, creds} = props

    const handleSubmit = (e)=>{
e.preventDefault()

const text = value.trim()

if(text.length > 0)sendMessage(creds, chatId, { text })

setValue('')
    }

    const handleChange = (e) =>{
        setValue(e.target.value)

        // isTypin(props, chatId)
        isTyping(props, chatId)

    }

    const handleUpload = (e) =>{
        sendMessage(creds, chatId, {file: e.target.file, text: ''})
    }
    
    return(
        <div>
            {/* <h1>message Form</h1> */}
            <form className='message-form' onSubmit={handleSubmit}  action="">
                <input type="text"
                 className='message-input'
                 placeholder='send a message...'
                 onChange={handleChange}
                 value={value}
                 onSubmit={handleSubmit}
                 />

                 <label htmlFor='upload-button'>
                     <span className="image-button">
                        {/* <PictureOutLined className='picture-icon' /> */}
                        <PictureOutlined className='picture-icon' />
                     </span>
                 </label>
                 <input type="file"
                 multiple={false}
                 id='upload-button'
                 style={{display:'none'}}
                 onChange={handleUpload}
                  />
                <button type='submit' className='send-button' > 
                    <SendOutlined  className='send-icon' />
                </button>
            </form>
        </div>
    )
}

export default MessageForm