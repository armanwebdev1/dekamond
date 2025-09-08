import { AuthUser } from "@/lib/useAuth";

export class AuthService {
  private static readonly STORAGE_KEY = "user";

  /**
   * Fetches a random user from the API to simulate authentication
   */
  static async authenticateUser(): Promise<AuthUser> {
    const response = await fetch("https://randomuser.me/api/?results=1&nat=us");
    
    if (!response.ok) {
      throw new Error("Network error occurred during authentication");
    }

    const data = await response.json();
    const randomUser = data.results[0];

    return {
      name: {
        first: randomUser.name.first,
        last: randomUser.name.last,
      },
      email: randomUser.email,
      picture: {
        large: randomUser.picture.large,
      },
    };
  }

  /**
   * Stores user data in localStorage
   */
  static storeUser(user: AuthUser): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
  }

  /**
   * Retrieves user data from localStorage
   */
  static getStoredUser(): AuthUser | null {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  /**
   * Removes user data from localStorage
   */
  static clearStoredUser(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Complete login flow: authenticate and store user
   */
  static async login(): Promise<AuthUser> {
    const user = await this.authenticateUser();
    this.storeUser(user);
    return user;
  }

  /**
   * Complete logout flow: clear stored data
   */
  static logout(): void {
    this.clearStoredUser();
  }
}