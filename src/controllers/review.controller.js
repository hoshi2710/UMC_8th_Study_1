import { StatusCodes } from "http-status-codes";
import {
  bodyToMyReviewList,
  bodyToReview,
  bodyToReviewList,
} from "../dtos/review.dto.js";
import {
  uploadReview,
  getStoreReviews,
  getMyReviews,
} from "../services/review.service.js";

export const handleUploadReview = async (req, res, next) => {
  /*
  #swagger.summary = '상점 리뷰 업로드 API';
  #swagger.parameters['storeId'] = {
    in: 'path',
    description: "스토어 ID",
    required:true,
  }
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json" : {
        schema: {
          type:"object",
          properties: {
            userid: {type:"number"},
            star: {type:"number",example:4.5},
            contents: {type: "string"},
            uploadedAt: {type: "string", example:"2025-05-01"}
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "상점 리뷰 업로드 성공 응답",
    content: {
      "application/json" : {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS"},
            error: { type: "object", nullable: true, example: null},
            success: {
              type: "object",
              properties: {
                storeName: {type: "string" },
                star: { type: "number", example:4.5 },
                contents: {type: "string"},
                uploadedAt: {type: "string", example:"2025-05-01T00:00:00.000Z"}
              }
            }
          }
        }
      }
    }
  };
  #swagger.responses[404] = {
    description: "상점 리뷰 업로드 실패 응답 (존재하지 않는 스토어)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: {type:"string", example: "FAIL"},
            error: {
              type: "object",
              properties: {
                errorCode: {type:"string", example:"S001"},
                reason: {type:"string", example:"존재하지 않는 스토어 입니다."},
                data: {
                  type:"object",
                  properties: {
                    userId : {type:"number"},
                    storeId: {type:"number"},
                    star: {type:"number", example:4.5},
                    contents: {type:"string"},
                    uploadedAt: {type:"string", example:"2025-05-01T00:00:00.000Z"}
                  }
                }
              }
            },
            success: { type:"obejct", nullable: true, example:null}
          }
        }
      }
    }
  }
  */
  console.log("새로운 리뷰가 작성되었습니다!");
  console.log("body: ", req.body);
  const review = await uploadReview(bodyToReview(req.body, req.params));
  res.status(StatusCodes.CREATED).success(review);
};

export const handleListStoreReviews = async (req, res, next) => {
  /*
  #swagger.summary = '상점 리뷰 목록 조회 API';
  #swagger.parameters['storeId'] = {
    in: 'path',
    description: "스토어 ID",
    required:true,
  }
  #swagger.parameters['cursor'] = {
    in: 'query',
    description: "페이지네이션 커서",
    required:false,
  }
  #swagger.responses[200] = {
    description: "상점 리뷰 목록 조회 성공 응답",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", nullable: true, example: null },
            success: {
              type: "object",
              properties: {
                data: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      store: { type: "object", properties: { id: { type: "number" }, name: { type: "string" } } },
                      user: { type: "object", properties: { id: { type: "number" }, email: { type: "string" }, name: { type: "string" } } },
                      content: { type: "string" }
                    }
                  }
                },
                pagination: { type: "object", properties: { cursor: { type: "number", nullable: true } }}
              }
            }
          }
        }
      }
    }
  };
  #swagger.responses[404] = {
    description: "상점 리뷰 목록 조회 실패 응답 (존재하지 않는 스토어)",
    content:{
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL"},
            error: {
              type: "object",
              properties: {
                errorCode: {type:"string", example: "S001"},
                reason: {type:"string", example: "존재하지 않는 스토어 입니다."},
                data: {
                  type: "object",
                  properties: {
                    storeId: {type:"number"},
                    cursor: {type:"number"}
                  }
                }
              }
            },
            success: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  };
*/
  console.log("리뷰 로딩 요청이 발생하였습니다!");
  console.log("body: ", req.body);
  const review = await getStoreReviews(bodyToReviewList(req.params, req.query));
  res.status(StatusCodes.OK).success(review);
};

export const handleListMyReviews = async (req, res, next) => {
  /*
  #swagger.summary = '자신이 작성한 리뷰 목록 조회 API';
  #swagger.parameters['storeId'] = {
    in: 'path',
    description: "스토어 ID",
    required:true,
  }
  #swagger.parameters['cursor'] = {
    in: 'query',
    description: "페이지네이션 커서",
    required:false,
  }
  #swagger.requestBody = {
    required:true,
    content: {
      "application/json":{
        schema: {
          type:"object",
          properties: {
            userId:{type:"number"}
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "자신이 작성한 리뷰 목록 조회 성공 응답",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", nullable: true, example: null },
            success: {
              type: "object",
              properties: {
                data: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      userId: { type: "number" },
                      storeId: { type: "number"},
                      uploadedAt: { type: "string", example: "2025-05-01T00:00:00.000Z"},
                      star: {type: "number", example: 4.5},
                      store: { type: "object", properties: { id: { type: "number" }, name: { type: "string" } } },
                      members: { 
                        type: "object", 
                        properties: { 
                          id: { type: "number" }, 
                          email: { type: "string" }, 
                          name: { type: "string" },
                          gender: { type : "string" },
                          birth: { type: "string" },
                          address: {type: "string"},
                          phoneNumber: { type: "string" }
                          } 
                        },
                      contents: { type: "string" }
                    }
                  }
                },
                pagination: { type: "object", properties: { cursor: { type: "number", nullable: true } }}
              }
            }
          }
        }
      }
    }
  };
  #swagger.responses[404] = {
    description: "자신이 작성한 리뷰 목록 조회 실패 응답 (존재하지 않는 사용자)",
    content:{
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL"},
            error: {
              type: "object",
              properties: {
                errorCode: {type:"string", example: "U002"},
                reason: {type:"string", example: "존재하지 않는 사용자 입니다."},
                data: {
                  type: "object",
                  properties: {
                    userId: {type:"number"},
                    cursor: {type:"number"}
                  }
                }
              }
            },
            success: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  };
*/
  console.log("내가 작성한 리뷰 로딩 요청이 발생하였습니다!");
  console.log("body: ", req.body);
  const review = await getMyReviews(bodyToMyReviewList(req.body, req.query));
  res.status(StatusCodes.OK).success(review);
};
