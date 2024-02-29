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

const EbooksAPI = {
  uploadBooks: async (accessToken, payload) => {
    const url = process.env.REACT_APP_BE_URL + "/book";
    const res = await fetch(url, {
      headers: {
        Authorization: accessToken,
      },
      method: "POST",
      body: payload,
    });
    return res.ok;
  },
  getMyBooks: async (accessToken) => {
    const url = process.env.REACT_APP_BE_URL + "/me/books";
    const res = await fetch(url, { headers: { Authorization: accessToken } });
    if (res.ok) {
      const data = await res.json();
      return data.books;
    }
    return null;
  },
  deleteBook: async (accessToken, bookId) => {
    const url = process.env.REACT_APP_BE_URL + "/books" + bookId;
    const res = await fetch(url, {
      headers: { Authorization: accessToken },
      method: "DELETE",
    });
    return res.ok;
  },
  // updateProgress: async (accessToken, currLocation, bookId) => {
  //   const url = process.env.REACT_APP_BE_URL + "/books/" + bookId + "/progress";
  //   const res = await fetch(url, {
  //     headers: { Authorization: accessToken },
  //     method: "PATCH",
  //     body: JSON.stringify({ currLocation }),
  //   });
  //   return res.ok;
  // },
};

export const API = {
  TextAPI,
  UserAPI,
  EbooksAPI,
};
