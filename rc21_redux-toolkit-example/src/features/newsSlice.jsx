import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";

const initialState = {
  user: "",
};

//? State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen api istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenemsini saglamak
//? adina bir arabirim kullanilmaktadir.
//? Bu arabirim middleware denilir.Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducers'a islenmis sonuclari gondermeden once gecikmeli asenkron ismlerinin yurutulmesini saglamaktir.
//---------------
//!🚩 If we are going to use async structure with redux, it is necessary to use an extra software   👉 Middleware  (thunk 👇 / saga)
//!🏴 It sends the incoming request to the API first. It gets the response from the API. Converts to a format that the reducer can understand.

const API_KEY = "2aa5116169d34f50be408fb62f68a73f";

export const getNews = createAsyncThunk(
  //! action type
  "news/getNews",
  //! async function
  async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
    try {
      const { data } = await axios.get(url);
      return data.articles;
    } catch (err) {
      console.log(err);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newList = [];
    },
  },
  //! baska slice'lardaki tanimlanan action'lara cevap vermek
  //! bilhassa  createAsyncThunk tarafindan olusturulan action'lara
  //! cevap vermek icin kullanilir.
  extraReducers: {
    [getNews.pending]: (state, action) => {
      state.loading = true;
    },
    [getNews.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.newsList = payload;
    },
    [getNews.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { clearList } = newsSlice.actions;

export default newsSlice.reducer;
