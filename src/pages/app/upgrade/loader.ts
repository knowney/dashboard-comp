export async function upgradeLoader() {
  try {
    //   const organize = await API.organize.getAll();
    //   return { organize: organize.data };
    return {};
  } catch (error) {
    return { error: 'error', message: error };
  }
}