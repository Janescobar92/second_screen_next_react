export const getConfig = async (url: string) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error({ error });
  }
};
