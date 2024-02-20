const TextAPI = {
  getMyTexts: async (accessToken) => {
    try {
      const url = process.env.REACT_APP_BE_URL + "/me/texts";
      const res = await fetch(url, { headers: { Authorization: accessToken } });
      if (res.ok) {
        const data = await res.json();
        return data.textFiles;
      }
      return null;
    } catch (e) {
      throw e;
    }
  },
  deleteText: async (accessToken, textFileId) => {
    try {
      const url = process.env.REACT_APP_BE_URL + "/texts/" + textFileId;
      const res = await fetch(url, {
        headers: { Authorization: accessToken },
        method: "DELETE",
      });
      if (res.ok) {
        const data = await res.json();
        return data.textFile;
      }
      return null;
    } catch (e) {
      throw e;
    }
  },
  saveText: async (accessToken, payload) => {
    try {
      const url = process.env.REACT_APP_BE_URL + "/text/";
      const res = await fetch(url, {
        headers: {
          Authorization: accessToken,
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        return data.textFile;
      }
      return null;
    } catch (e) {
      throw e;
    }
  },
  updateText: async (accessToken, payload, textFileId) => {
    try {
      const url = process.env.REACT_APP_BE_URL + "/texts/" + textFileId;
      const res = await fetch(url, {
        headers: {
          Authorization: accessToken,
          "Content-type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        return data.textFile;
      }
      return null;
    } catch (e) {
      throw e;
    }
  },
};

const UserAPI = {
  login: () => {},
};

export const API = {
  TextAPI,
  UserAPI,
};
