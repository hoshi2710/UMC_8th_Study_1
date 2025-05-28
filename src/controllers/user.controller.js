import {StatusCodes} from "http-status-codes";
import {bodyToUser} from "../dtos/user.dto.js";
import {userSignUp, userInfoModify} from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
  /*
  #swagger.summary = '회원 가입 API';
  #swagger.requestBody = {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: { type: "string" },
            name: { type: "string" },
            gender: { type: "number" },
            birth: { type: "string", format: "date" },
            address: { type: "string" },
            phoneNumber: { type: "string" },
            preferences: { type: "array", items: { type: "number" } }
          }
        }
      }
    }
  };
  #swagger.responses[200] = {
    description: "회원 가입 성공 응답",
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
                preferCategory: { type: "array", items: { type: "string" } }
              }
            }
          }
        }
      }
    }
  };
  #swagger.responses[409] = {
    description: "회원 가입 실패 응답 (이미 존재하는 이메일)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL" },
            error: {
              type: "object",
              properties: {
                errorCode: { type: "string", example: "U001" },
                reason: { type: "string", example: "이미 존재하는 이메일입니다." },
                data: { 
                  type: "object",
                  properties: {
                    email:{type:"string"},
                    name:{type:"string"},
                    gender:{type:"string", example:"M"},
                    birth:{type:"string", example:"2025-03-08T00:00:00.000Z"},
                    address:{type:"string"},
                    phoneNumber:{type:"string", example:"01012345678"},
                    preferences:{
                      type:"array",
                      items: {
                        type:"number"
                      }
                    }
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
  console.log("회원가입을 요청했습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  const user = await userSignUp(bodyToUser(req.body));
  // res.status(StatusCodes.OK).json({ result: user });
  res.status(StatusCodes.OK).success(user);
};

export const handleUserInfoModify = async (req, res, next) => {

  console.log("회원정보 수정을 요청했습니다!");
  console.log("body:", req.body);
  const user = await userInfoModify(bodyToUser(req.body));
  res.status(StatusCodes.OK).success(user);
}