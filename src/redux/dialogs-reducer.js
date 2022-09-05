const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';


const initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE :

            const text = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 7, text: text, myMsg: false, author: "Taras"}]
            }


        default :
            return state
    }
}

export default dialogsReducer;

export const sendMessage = (newMessageText) => ({type: ADD_MESSAGE ,newMessageText})

