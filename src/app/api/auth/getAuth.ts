export const getAuth = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("api call - getAuth");

  return {
    userId: Math.floor(Math.random() * 100) + 1,
  };
};
