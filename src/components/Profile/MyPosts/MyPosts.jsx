import React from 'react';
import { Form, Field } from 'react-final-form'

import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {composeValidators, requiredField, maxLength } from '../../../utils';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const AddPostReduxForm = (props) => {

    
    
    return (
        <Form
            initialValues={{

            }}
            onSubmit={values => {
                const text = values.postText;
                props.addPost(text)
                // send values to the cloud
            }}
            validate={values => {

                // do validation here, and return errors object
            }}
            //validateOnBlur={true}
            >
            {
            ({ handleSubmit, pristine, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name='postText'
                            component={Textarea}
                            type='text'
                            placeholder="Enter your new post here"
                            afterSubmit={form.reset}
                            validate={composeValidators (requiredField, maxLength(10))}>
                                {/* {({ input, meta }) => (
                                    <div className={classes.errorContainer}>
                                        <textarea {...input} className={meta.error && meta.touched ? classes.required : undefined}/>
                                        {meta.error && meta.touched && <span className={classes.requiredText}>{meta.error}</span>}
                                    </div>
                                )} */}
                            </Field>
                            
                        
                    </div>
                    <div>
                        <button type="submit" disabled={submitting}>Add post</button>
                    </div>
                </form>
            )}
              
            </Form>
    )
}



    const MyPosts = (props) => {
    const postsElements = [...props.postsData]
        .reverse()
        .map(post => <Post message={post.message} key={post.id} like_count={post.likesCount}/>)

    const newPostElement = React.createRef();

 
    //    console.log("RENDER")
        return (
            
                <div className={classes.postsBlock}>
                    <h3>My posts</h3>

                    <AddPostReduxForm updateNewPostText={props.updateNewPostText} addPost={props.addPost} />
                    <div className={classes.posts}>
                        {
                            postsElements
                        }

                        
                    </div>
                </div>
            
        )
    
}

//  class MyPosts extends React.Component {

  
        
    
//          render () {
//            const postsElements = this.props.postsData.map(post => <Post message={post.message} key={post.id} like_count={post.likesCount}/>)
    
//             const newPostElement = React.createRef();

//            console.log("RENDER")
//             return (
                
//                     <div className={classes.postsBlock}>
//                         <h3>My posts</h3>
    
//                         <AddPostReduxForm updateNewPostText={this.props.updateNewPostText} addPost={this.props.addPost} />
//                         <div className={classes.posts}>
//                             {
//                                 postsElements
//                             }
    
                            
//                         </div>
//                     </div>
                
//             )
//          }
//     }

export default MyPosts;