import { Form, Field } from 'react-final-form'

import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { composeValidators, requiredField , maxLength} from '../../utils';
import { Textarea } from '../Common/FormsControls/FormsControls';


const AddMessageReduxForm = (props) => {
   
    return (
        <Form
            initialValues={{

            }}
            onSubmit={values => {
                const text = values.newMessageText;
                props.sendMessage(text)
                
                // send values to the cloud
            }}
            validate={values => {
                // do validation here, and return errors object
            }}
            
            >
            {
            ({ handleSubmit, pristine, form, submitting }) => (
                <form onSubmit={handleSubmit}   className={classes.form}>
                    <div>
                        <Field
                            name='newMessageText'
                            component={Textarea}
                            type='text'
                            placeholder="Enter your message here"
                            afterSubmit={form.reset}
                            validate={composeValidators(requiredField, maxLength(50))}>
                            {/* {({ input, meta }) => (
                                    <div className={classes.errorContainer}>
                                        <textarea {...input} className={meta.error && meta.touched ? classes.required : undefined}/>
                                        {meta.error && meta.touched && <span className={classes.requiredText}>{meta.error}</span>}
                                    </div>
                            )} */}
                            </Field>
                       
                    </div>
                    <div>
                        <button type="submit" disabled={submitting}>Send message</button>
                    </div>
                </form>
            )}
              
            </Form>
    )
}

const Dialogs = (props) => {

    const user = "Taras";

    const {messages, dialogs} = props.dialogsPage;

    const messagesElements = messages.map(msg => <Message user={user} key={msg.id} msg={{...msg, ava: dialogs[0].ava}}/>)
    const dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} ava={dialog.ava}/>)

  

    return (
        <div className={classes.dialogs}>
           
            <div className={classes.dialogsItems}>

                { dialogsElements }

            </div>
           
            <div className={classes.messagesBox}>
               <div className={classes.messages}>
                { messagesElements }
               </div>
                

                <AddMessageReduxForm sendMessage={props.sendMessage} />
               
            </div>

        </div>
    )
}



export default Dialogs;