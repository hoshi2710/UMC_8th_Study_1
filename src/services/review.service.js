import { responseFromReview } from "../dtos/review.dto.js";
import { addReview, getReview } from "../repositories/review.repository.js";

export const uploadReview = async (data) => {
  // console.log(data.storeId);
  const addedReviewId = await addReview({
    userId: data.userId,
    storeId: data.storeId,
    star: data.star,
    contents: data.contents,
    uploadedAt: data.uploadedAt,
  });
  if (addedReviewId == null) {
    throw new Error("존재하지 않은 매장 ID 입니다.");
  }
  console.log(addedReviewId);
  const review = await getReview(addedReviewId);
  console.log(review);
  return responseFromReview({ review });
};
