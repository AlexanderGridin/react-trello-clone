// TODO: this is need to be changed. Only for temporary purposes
export const getRequestParams = () => {
  const userId = localStorage.getItem("userId");
  return { params: { userId } };
};
