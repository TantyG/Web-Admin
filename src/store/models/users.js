const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  export const users = {
    state: {
        listUser: data,
        count: data.length,
        currentUser: []
    }, // initial state
    reducers: {
      // handle state changes with pure functions
        setListUser(state, listUser) {
            return {
                ...state,
                listUser,
            };
        },
        setCount(state, count) {
            return {
                ...state,
                count,
            };
        },
        setCurrentUser(state, currentUser){
          return {
            ...state,
            currentUser,
        };
        }
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      // async incrementAsync(payload, rootState) {
      //   await new Promise((resolve) => setTimeout(resolve, 1000));
      //   dispatch.count.increment(payload);
      // },
      async fetchUser(payload, rootState){
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
        this.setListUser(data);
        this.setCurrentUser(data);
      }

    }),
    selectors: (slice, createSelector) => ({
      selectCount() {
        return slice(state => state.count);
      },
      setListUser() {
        return createSelector(
          slice(state => state.listUser),
          (state, params) => {
            return Object.values(state)
              .filter(p => p.type === params.type)
              .filter(p => p.listUser.includes(params.listUser));
          }
        );      
      },
  }),
  };