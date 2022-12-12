// 초기 상태값
const initialState = {
  profile: false,
  lender: 0,
};

// 리듀서
const profilebtn = (state = initialState, action) => {
  switch (action.type) {
    case "BTN_FALSE":
      return {
        ...state,
        profile: false,
        lender: state.lender + 1,
      };
    case "BTN_TRUE":
      return {
        ...state,
        profile: true,
        lender: state.lender + 1,
      };
    case "BTN_TOGGLE":
      return {
        ...state,
        profile: !state.profile,
        lender: state.lender + 1,
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default profilebtn;
