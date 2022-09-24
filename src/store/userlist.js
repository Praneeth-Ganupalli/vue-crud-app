import axios from "axios";
export default {
  namespaced: true,
  state: {
    userName: "Praneeth",
    userList:[],
    personRandImage:""
  },
  getters: {
    listOfUsers(state)
    {
        return state.userList;
    },
    activeUsers(state)
    {
      let userDb=state.userList;
      return userDb.filter(user=>user.status=="Active");
    },
    inActiveUsers(state)
    {
      let userDb=state.userList;
      return userDb.filter(user=>user.status=="Inactive");
    }
  },
  mutations: {
    setUserData(state,data){
        let savedUsers=window.sessionStorage.getItem("usersList");
        savedUsers=JSON.parse(savedUsers);
        if(savedUsers && savedUsers.length)
        {
          state.userList=savedUsers;
        }
        else{
          state.userList=data;
        }
       
    },
    addUser(state,user)
    {
        state.userList.unshift(user);
        window.sessionStorage.setItem("usersList",JSON.stringify(state.userList));
    },
    removeUser(state,userId)
    {
       state.userList =state.userList.filter((info) => {
            return info.id != userId;
          });
          window.sessionStorage.setItem("usersList",JSON.stringify(state.userList));
    },
    setPersonImage(state,data)
    {
        state.personRandImage=data;
    }
  },
  actions: {
    getUserList(context) {
      axios.get("/users.json").then((response) => {
        context.commit("setUserData",response.data)
      });
    },
    getPersonImage(context)
    {
        axios.get("https://randomuser.me/api/").then((response) => {
            context.commit("setPersonImage",response.data.results[0].picture.medium);
          });
    }
    
  },
};
