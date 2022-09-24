import { createStore } from "vuex";
import userlist from "./userlist";

const store = createStore({
    modules: {
        userlist
    },
    state:{
        currentPage:"",
        notficationModal:{},
    },
    getters:
    {

    },
    mutations:
    {
        setCurrentPageBreadCrumb(state,data)
        {
            state.currentPage=data;
        },
        setNotificationHeader(state,data)
        {
            state.notficationModal = data;
        }
    },
    actions:
    {

    }
})
export default store;