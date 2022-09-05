import profileReducer, { addPost, deletePost } from "./profile-reducer";

const state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 10 },

    ],

}

test('length of posts should be incremented', () => {
    const action = addPost('NEW POST')

    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
});

test('message of new posts should correct', () => {
    const action = addPost('NEW POST')

    const newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe('NEW POST')
});

test('after deleting lenght of posts should be decrement', () => {
    const action = deletePost(1)

    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
});

test(`after deleting lenght of posts shouldn't be decrement if ID is incorrect`, () => {
    const action = deletePost(1000)

    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});