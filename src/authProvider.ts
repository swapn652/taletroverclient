import { AuthBindings } from "@refinedev/core";
export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthBindings = {
  login: async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Invalid email or password");
      }

      const { token } = await response.json();
      localStorage.setItem(TOKEN_KEY, token);

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: "LoginError",
          //@ts-ignore
          message: error.message || "Invalid email or password",
        },
      };
    }
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  register: async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:8000/addAuthor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to register");
      }

      // Registration successful
      const { token } = await response.json();
      localStorage.setItem(TOKEN_KEY, token);

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (error) {
      return {
        success: false,
        error: {
          name: "RegistrationError",
          //@ts-ignore
          message: error.message || "Failed to register",
        },
      };
    }
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    try {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        const response = await fetch("http://localhost:8000/getUserData", {
          headers: {
            Authorization: token,
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          const { id, email } = data;
  
          return {
            id: id,
            name: email || "User",
            avatar: "https://i.pravatar.cc/300",
          };
        }
      }
  
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  
};
