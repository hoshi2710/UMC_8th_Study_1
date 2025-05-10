export const bodyToReview = (body, params) => {
  const uploadedAt = new Date(body.uploadedAt);

  return {
    userId: body.userId,
    storeId: params.storeId,
    star: body.star,
    contents: body.contents,
    uploadedAt,
  };
};

export const responseFromReview = (body) => {
  return {
    storeName: body.review[0].name,
    star: body.review[0].star,
    contents: body.review[0].contents,
    uploadedAt: body.review[0].uploaded_at,
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
    });
  });
  return {
    data: data,
    pagination: {
      cursor: data.length ? data[data.length - 1].id : null,
    },
  };
};
