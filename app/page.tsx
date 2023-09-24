"use client";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import { Provider } from "react-redux";
import store from "../store/store.js";
export default function Home() {
  return (
    <Provider store={store}>
      <div style={{ width: "100%" }}>
        <Header />
        <Main />
      </div>
    </Provider>
  );
}
