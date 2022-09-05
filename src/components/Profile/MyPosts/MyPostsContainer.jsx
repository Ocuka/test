import React from 'react';
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
/*import {StoreContext} from "../../../StoreContext";*/
import {connect} from "react-redux";



/*const MyPostsConteiner = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }

                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={addPost}
                             postsData={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>)
            }
            }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.posts
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}*/

const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts)

export default MyPostsContainer;