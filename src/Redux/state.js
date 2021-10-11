let store = {

    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hi,how are you", likesCount: '2'},
                {id: 2, message: 'It is my first post', likesCount: '4'},
                {id: 3, message: 'It is my second post', likesCount: '23'},
                {id: 4, message: 'It is my last post', likesCount: '8'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Andrey',
                    avatar: 'https://images.cdn.yle.fi/image/upload/f_auto,fl_lossy,q_auto,dpr_3,w_320,c_fill,ar_16:9,d_yle-areena.jpg/v1613894129/13-1-3043963-1613738251952.jpg'
                },
                {
                    id: 2,
                    name: 'Aloha',
                    avatar: 'data:image/jpeg;base64,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'
                },
                {
                    id: 3,
                    name: 'Misha',
                    avatar: 'https://thumbs.dreamstime.com/b/oboe-%D0%BD%D0%B0-%D0%B1%D0%B5-%D0%BE%D0%B9-%D0%BF%D1%80%D0%B5-%D0%BF%D0%BE%D1%81%D1%8B-%D0%BA%D0%B5-37634543.jpg'
                },
                {
                    id: 4,
                    name: 'Gleb',
                    avatar: 'https://jam.ua/files/images/items/TB450M-(S)-main-jmichael.jpg'
                },
                {
                    id: 5,
                    name: 'Tima',
                    avatar: 'https://www.muzpro.eu/10442-large_default/yamaha-ybs-62e-eb-baritone-saxophone.jpg'
                },
            ],
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Ho'},
                {id: 3, message: 'He'},
                {id: 4, message: 'Hy'},

            ],
            newMessageText: ' '
        },
    },
    _subscriber() {
        console.log('state')
    },

    subscribe(observer) {
        this._subscriber = observer;
    },
    getState() {
        return this._state;
    },



    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messageData.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._subscriber(this._state);
    },
    updateMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._subscriber(this._state);
    },

    dispatch(action) {
      if (action.type === 'ADD-POST') {
          let newPost = {
              id: 5,
              message: this._state.profilePage.newPostText,
              likesCount: '1'
          };
          this._state.profilePage.postData.push(newPost);
          this._state.profilePage.newPostText = '';
          this._subscriber(this._state);
      } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
          this._state.profilePage.newPostText = action.newText;
          this._subscriber(this._state);
      }
    }
}

export default store
