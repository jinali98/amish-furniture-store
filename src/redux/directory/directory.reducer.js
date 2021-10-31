const INITIAL_STATE = {
  sections: [
    {
      title: "winter collection",
      imageUrl: "https://i.ibb.co/6yq2Cfn/image-about-dark.jpg",
      id: 1,
      linkUrl: "shop/winter",
    },
    {
      title: "summer collection",
      imageUrl: "https://i.ibb.co/Jyb26CG/desktop-image-hero-2.jpg",
      id: 2,
      linkUrl: "shop/summer",
    },
    {
      title: "autumn collection",
      imageUrl: "https://i.ibb.co/54kWnYg/desktop-image-hero-3.jpg",
      id: 3,
      linkUrl: "shop/autumn",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
