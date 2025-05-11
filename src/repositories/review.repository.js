import { prisma } from "../db.config.js";
export const addReview = async (data) => {
  try {
    const confirm = await prisma.store.findFirst({
      select: {
        id: true,
      },
      where: {
        id: data.storeId,
      },
    });
    if (confirm == null) {
      return null;
    }
    const review = await prisma.review.create({ data: data });
    const storeStatus = await prisma.storeStatus.update({
      where: {
        id: data.storeId,
      },
      data: {
        reviewsCount: {
          increment: 1,
        },
        starTotal: {
          increment: data.star,
        },
      },
    });
    return review.id;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

export const getReview = async (reviewId) => {
  try {
    const review = await prisma.review.findFirst({
      select: {
        store: {
          select: {
            name: true,
          },
        },
        star: true,
        contents: true,
        uploadedAt: true,
      },
      where: {
        id: reviewId,
      },
    });
    return review;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

export const getAllReviews = async (data) => {
  const isStoreExists = await prisma.store.findFirst({
    select: {
      id: true,
    }, where: {
      id: data.storeId,
    }
  })
  if (isStoreExists == null) return null;
  const review = await prisma.review.findMany({
    select: {
      id: true,
      userId: true,
      storeId: true,
      uploadedAt: true,
      star: true,
      contents: true,
      members: {
        select: {
          id: true,
          name: true,
          gender: true,
          birth: true,
          address: true,
          phoneNumber: true,
          email: true,
        },
      },
      store: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: {
      storeId: data.storeId,
      id: {
        gt: data.cursor,
      },
    },
    orderBy: {
      id: "asc",
    },
    take: 5,
  });
  return review;
};

export const getAllMyReviews = async (data) => {
  const isUserExists = await prisma.members.findFirst({
    select: {
      id: true,
    }, where: {
      id: data.userId,
    }
  });
  if (isUserExists == null) return null;
  const review = await prisma.review.findMany({
    select: {
      id: true,
      userId: true,
      storeId: true,
      uploadedAt: true,
      star: true,
      contents: true,
      members: {
        select: {
          id: true,
          name: true,
          gender: true,
          birth: true,
          address: true,
          phoneNumber: true,
          email: true,
        },
      },
      store: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: {
      userId: data.userId,
      id: {
        gt: data.cursor,
      },
    },
    orderBy: {
      id: "asc",
    },
    take: 5,
  });
  return review;
};
