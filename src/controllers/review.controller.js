import { StatusCodes } from "http-status-codes";
import { bodyToReview } from "../dtos/review.dto.js";
import { uploadReview } from "../services/review.service.js";

export const handleUploadReview = async (req, res, next) => {
  console.log("새로운 리뷰가 작성되었습니다!");
  console.log("body: ", req.body);
  const review = await uploadReview(bodyToReview(req.body, req.params));
  res.status(StatusCodes.CREATED).json({ result: review });
};
