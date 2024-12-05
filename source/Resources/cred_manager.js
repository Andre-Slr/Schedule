import RNFS from 'react-native-fs';

const filePath = RNFS.DocumentDirectoryPath + '/credenciales.json';

export const saveCredentials = async (username, password) => {
  const credentials = { username, password };
  await RNFS.writeFile(filePath, JSON.stringify(credentials), 'utf8');
};

export const loadCredentials = async () => {
  try {
    const fileExists = await RNFS.exists(filePath);
    if (fileExists) {
      const credentials = await RNFS.readFile(filePath);
      return JSON.parse(credentials);
    }
  } catch (error) {
    console.error('Error loading credentials', error);
  }
  return null;
};

export const clearCredentials = async () => {
  try {
    await RNFS.unlink(filePath);
  } catch (error) {
    console.log('Error clearing credentials', error);
  }
};
