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
