const mouseHover = (id) => {
    return {
      type: "onMouseOver",
      payload: id,
    };
}

const removeUser = (id) => {
  return {
    type: "removeUser",
    payload: id,
  };
};

export {mouseHover, removeUser};