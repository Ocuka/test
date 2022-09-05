import { Form, Field } from 'react-final-form'
import {connect} from "react-redux";
import { Navigate } from 'react-router-dom';

import { requiredField } from '../../utils';
import { createField, Input } from '../Common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import classes from "./Login.module.css";
import { FORM_ERROR } from 'final-form';


// const LoginForm = (props) => {
//     return (
        
//             <form>
//                 <div>
//                     <input placeholder="Login"/>
//                 </div>
//                 <div>
//                 <input placeholder="Password"/>
//                 </div>
//                 <div>
//                 <input type="checkbox"/> remember me
//                 </div>
//                 <div>
//                     <button>Login</button>
//                 </div>
//             </form>
        
//     )
// }

const LoginReduxForm = (props) => {
   const {captchaUrl} = props
    return (
        <Form
            initialValues={{

            }}
            onSubmit={ values => {
                const {email, password, rememberMe, captcha} = values
                props.login({email, password, rememberMe, captcha})
                return {[FORM_ERROR]: props.formError}
                
                // send values to the cloud
            }}
            validate={values => {
                
                // do validation here, and return errors object
            }}
            validateOnBlur={true}
            >
            {
            //({ handleSubmit, pristine, form, submitting }) => (
                ({ handleSubmit, submitError, submitting }) => {
                    return (
                <form onSubmit={handleSubmit}>
                    <div>
                        {createField('email',Input, 'email', "Email", requiredField)}
                        {/* <Field
                            name='email'
                            component={Input}
                            type='text'
                            placeholder="Email"
                            validate={requiredField}
                        /> */}
                    </div>
                    <div>
                        {createField('password',Input, 'password', "Password", requiredField)}
                        {/* <Field
                            name='password'
                            component={Input}
                            type='password'
                            placeholder="Password"
                            validate={requiredField}
                        /> */}
                    </div>
                    <div className={classes.remember}>
                        {createField('rememberMe',Input, 'checkbox')}
                        {/* <Field
                            name='rememberMe'
                            component={Input}
                            type='checkbox'
                            
                        /> */}
                        <span>remember me</span>
                    </div>

                    {captchaUrl && 
                    <div className='captcha'>
                        <img src={captchaUrl}/>
                        {createField('captcha',Input, 'text', "text from picture", requiredField)}
                        {/* <Field
                            name='captcha'
                            component={Input}
                            type='text'
                            placeholder="text from picture"
                            validate={requiredField}
                        /> */}
                    </div>
                    }

                    <div>
                        <button type="submit" disabled={submitting}>Login</button>
                    </div>

                    {submitError && <div className={classes.error}>{submitError}</div>}
                
                </form>
            )}
            }   
            </Form>
    )
}



const Login = (props) => {
    const {isAuth, ...restProps} = props
    if (isAuth)
        return <Navigate to='/profile' />
    debugger
    return (
        <div className={classes.loginContainer}>
            <h1>Login</h1>
            <LoginReduxForm {...restProps}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    formError: state.auth.formError,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);