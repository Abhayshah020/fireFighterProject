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
  adminId:"",
  avatarName:""
};

const userSlice = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DETAILS:
      const { name, email,address,avatarName, _id,phone,role,adminId} = action.payload;
      return {
        ...state,
        name,
        email,
        address,
        _id,
        phone,
        role,
        adminId,
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
        adminId:"",
        avatarName:""
      };
    default:
      return state;
  }
};

export default userSlice;
