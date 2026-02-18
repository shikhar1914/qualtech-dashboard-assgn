export interface User {
  name: string;
  email: string;
  timestamp: string;
}

const STORAGE_KEY = "users";

const getStoredUsers = (): User[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? (JSON.parse(data) as User[]) : [];
  } catch {
    return [];
  }
};

export const signupUser = async (
  name: string,
  email: string
): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = getStoredUsers();

      const newUser: User = {
        name,
        email,
        timestamp: new Date().toISOString(),
      };

      const updatedUsers = [...users, newUser];

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedUsers)
      );

      resolve(newUser);
    }, 1000);
  });
};

export const getUsers = (): User[] => {
  return getStoredUsers();
};