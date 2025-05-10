import { StatusCodes } from "http-status-codes";
import { bodyToReview, bodyToReviewList } from "../dtos/review.dto.js";
import { uploadReview, getStoreReviews } from "../services/review.service.js";

export const handleUploadReview = async (req, res, next) => {
  console.log("새로운 리뷰가 작성되었습니다!");
  console.log("body: ", req.body);
  const review = await uploadReview(bodyToReview(req.body, req.params));
  res.status(StatusCodes.CREATED).json({ result: review });
};

export const handleListStoreReviews = async (req, res, next) => {
  console.log("리뷰 로딩 요청이 발생하였습니다!");
  console.log("body: ", req.body);
  const review = await getStoreReviews(bodyToReviewList(req.params, req.query));
  res.status(StatusCodes.OK).json(review);
};
