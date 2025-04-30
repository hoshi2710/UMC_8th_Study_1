export const bodyToUser = (body) => {
  const birth = new Date(body.birth);

  return {
    email: body.email,
    name: body.name,
    gender: body.gender,
    birth,
    address: body.address || "",
    phoneNumber: body.phoneNumber,
    preferences: body.preferences,
  };
};

export const responseFromUser = (body) => {
  const preferCategory = [];
  for (const preference of body.preferences) {
    preferCategory.push(preference.name);
  }
  return {
    email: body.user[0].email,
    name: body.user[0].name,
    preferCategory,
  };
};
