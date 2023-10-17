import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Start from "./routes/root";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Partes from "./routes/partes";
import FinalQuiz from "./routes/final";
import Submit from "./routes/submit";
import "./App.css";
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5,
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </>
  );
};

const client = new ApolloClient({
  uri: "https://lestee.com.br/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<Start />} />
            <Route path="/opcoes/:parte" element={<Partes />} />
            <Route path="/final/:parte/:tratamento" element={<FinalQuiz />} />
            <Route path="/submit/:tratamento" element={<Submit />} />
          </Route>
        </Routes>
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>
);
