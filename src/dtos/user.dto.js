import {Gender} from "../generated/prisma/client.js";

export const bodyToUser = (body) => {
  const birth = new Date(body.birth);
  const genderEnum = ["M", "F"];
  return {
    id: body.id,
    email: body.email,
    name: body.name,
    gender: Gender[genderEnum[body.gender]],
    birth,
    address: body.address || "",
    phoneNumber: body.phoneNumber,
    preferences: body.preferences,
  };
};

export const responseFromUser = (body) => {
  const preferCategory = [];
  for (const preference of body.preferences) {
    preferCategory.push(preference.foodType.name);
  }
  return {
    email: body.email,
    name: body.name,
    preferCategory,
  };
};
