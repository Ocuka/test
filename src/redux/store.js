import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 10},

            ],
            newPostText: 'Your new post'
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 2, name: 'Andrey', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 3, name: 'Sasha', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 4, name: 'Viktor', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 5, name: 'Valera', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 6, name: 'Vova', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}
            ],

            messages: [
                {id: 1, text: 'Hi', myMsg: false, author: "Nik"},
                {id: 2, text: 'How is your day', myMsg: true, author: "Taras"},
                {id: 3, text: 'Good morning', myMsg: false, author: "Nik"},
                {id: 4, text: 'Yo', myMsg: true, author: "Taras"},
                {id: 5, text: 'Yo', myMsg: true, author: "Taras"},
                {id: 6, text: 'Yo', myMsg: true, author: "Taras"}
            ],

            newMessageText: ''
        },

        sideBar: {

            friends: [
                {id: 1, name: 'Dima', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 2, name: 'Andrey', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
                {id: 3, name: 'Sasha', ava: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}
            ]
        }


    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);

    }

}






export default store;
window.store = store;