let store = {
   _state : {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi,how are you?', quantity: 60, quantity1: 5 },
        { id: 2, message: "It's my first post.", quantity: 40, quantity1: 3 }
      ],
      newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your kamasutra" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" }
      ],
      photos: [
        { id: 1, photo: 'https://image.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1041841363.jpg' },
        { id: 2, photo: 'https://image.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1041841363.jpg' },
        { id: 3, photo: 'https://image.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1041841363.jpg' },
        { id: 4, photo: 'https://image.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1041841363.jpg' },
        { id: 5, photo: 'https://image.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1041841363.jpg' },
        { id: 6, photo: 'https://image.shutterstock.com/image-photo/passport-photo-portrait-asian-smiling-260nw-1041841363.jpg' },
      ]
    },
    sidebar: {
      friends: [
        { id: 1, name: "Sveta" },
        { id: 2, name: "Tania" },
        { id: 3, name: "Olia" }
      ]
    },
    newMessageDialog: "New message"
  },
  getState () {
   return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
   _callSubscriber () {
    console.log('Патрон, обсервер, наблюдатель,обработчик события')
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this.state.profilePage.newPostText,
        quantity: 0,
        quantity1: 0
      }
      this.state.profilePage.posts.push(newPost);
      this.state.profilePage.newPostText = ('');
      this._callSubscriber(this.state);
    }
      else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this.state.profilePage.newPostText = action.newText;
         this._callSubscriber(this.state);
      }
  },
  /* addPost () {
    let newPost = {
      id: 5,
      message: this.state.profilePage.newPostText,
      quantity: 0,
      quantity1: 0
    }
    this.state.profilePage.posts.push(newPost);
    this.state.profilePage.newPostText = ('');
    this._callSubscriber(this.state);
  },
   updateNewPostText (newText) {
    this.state.profilePage.newPostText = newText;
    this._callSubscriber(this.state);
  },*/

}
export default store;
window.state = store;