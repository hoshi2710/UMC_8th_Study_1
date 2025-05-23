export const bodyToReview = (body, params) => {
  const uploadedAt = new Date(body.uploadedAt);

  return {
    userId: body.userId,
    storeId: parseInt(params.storeId),
    star: body.star,
    contents: body.contents,
    uploadedAt,
  };
};

export const responseFromReview = (body) => {
  return {
    storeName: body.review.store.name,
    star: body.review.star,
    contents: body.review.contents,
    uploadedAt: body.review.uploadedAt,
  };
};

export const bodyToReviewList = (params, query) => {
  return {
    storeId: parseInt(params.storeId),
    cursor: typeof query.cursor === "string" ? parseInt(query.cursor) : 0,
  };
};

export const responseFromReviewList = (body) => {
  const data = [];
  body.review.forEach((element) => {
    data.push({
      id: element.id,
      userId: element.userId,
      storeId: element.storeId,
      uploadedAt: element.uploadedAt,
      star: element.star,
      store: {
        id: element.store.id,
        name: element.store.name,
      },
      members: {
        id: element.members.id,
        name: element.members.name,
        gender: element.members.gender,
        birth: element.members.birth,
        address: element.members.address,
        phoneNumber: element.members.phoneNumber,
        email: element.members.email,
      },
      contents: element.contents
    });
  });
  return {
    data: data,
    pagination: {
      cursor: data.length ? data[data.length - 1].id : null,
    },
  };
};
export const bodyToMyReviewList = (body, query) => {
  return {
    userId: body.userId,
    cursor: typeof query.cursor === "string" ? parseInt(query.cursor) : 0,
  };
};
