import {connect} from "react-redux";
import {compose} from "redux"
import { withAuthRedirect } from "../../HOC/WithAuthRedirect";


import {sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
/*import {StoreContext} from "../../StoreContext";*/


/*const DialogsConteiner = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage


                const newMessage = () => {
                    store.dispatch(addMessageActionCreator())

                }

                const onMessageTextChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
                return (
                    <Dialogs updateNewMessageText={onMessageTextChange}
                             sendMessage={newMessage}
                             dialogsPage={state}/>
                )
            }

            }
        </StoreContext.Consumer>
    )
}*/

// compose (
//     connect(mapStateToProps,
//         {
//         updateNewMessageText,
//         sendMessage
//     }),
//     withAuthRedirect
// )(Dialogs)


// let AuthRedirectComponent = withAuthRedirect(Dialogs)


const mapStateToProps = (state) => ({ 
    dialogsPage : state.dialogsPage
})


/*const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
        sendMessage: () => dispatch(addMessageActionCreator())
    }
}*/

// const DialogsContainer = connect(mapStateToProps,
//     {
//     updateNewMessageText,
//     sendMessage
// })(AuthRedirectComponent)

export default compose (
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)