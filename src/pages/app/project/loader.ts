export async function projectLoader() {
  try {
    //   const organize = await API.organize.getAll();
    //   return { organize: organize.data };
    return {};
  } catch (error) {
    return { error: 'error', message: error };
  }
}
