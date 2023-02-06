class apiAuthServices {
  static getInstance() {
    return new apiAuthServices();
  }
  userSignUp = async (userDetails) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2g8Gb8OahWsxNHJ_FJmMu9bD7E_1az6k",
      {
        method: "POST",
        body: JSON.stringify({
          email: userDetails.email,
          password: userDetails.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      return response.json().then((data) => {
        return data;
      });
    } else {
      return response.json().then((data) => {
        let errorMessage = "Authentication-failed";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        alert(errorMessage);
      });
    }
  };
  userLogIn = async (userDetails) => {
    console.log(userDetails);
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2g8Gb8OahWsxNHJ_FJmMu9bD7E_1az6k",
      {
        method: "POST",
        body: JSON.stringify({
          email: userDetails.email,
          password: userDetails.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      return response.json().then((data) => {
        return data;
      });
    } else {
      return response.json().then((data) => {
        let errorMessage = "Log-In Failed";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        alert(errorMessage);
      });
    }
  };
  getUserProfile = async () => {
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA2g8Gb8OahWsxNHJ_FJmMu9bD7E_1az6k",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      return response.json().then((data) => {
        return data;
      });
    }
  };
  updateUserProfile = async (userDetails) => {
    const idToken = localStorage.getItem("idToken");
    console.log(userDetails.name, userDetails.picUrl);
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA2g8Gb8OahWsxNHJ_FJmMu9bD7E_1az6k",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          displayName: userDetails.name,
          photoUrl: userDetails.picUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  };
}

export const apiAuthService = apiAuthServices.getInstance();
