import {
  ADD_USER_DETAILS,
  REMOVE_USER_DETAILS_LOGOUT,
} from "../actionTypes/actionTypes";

const initialState = {
  email: "",
  name: "",
  token: "",
  address:"",
  phone:"",
  _id: "",
  role:"",
  avatarName:""
};

const userSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DETAILS:
      const { name, email,address,avatarName, _id,phone,role} = action.payload;
      return {
        ...state,
        name,
        email,
        address,
        _id,
        phone,
        role,
        avatarName
      };
    case REMOVE_USER_DETAILS_LOGOUT:
      return {
        ...state,
        name: "",
        email: "",
        address:"",
        _id: "",
        phone:"",
        role:"",
        avatarName:""
      };
    default:
      return state;
  }
};

export default userSlice;
