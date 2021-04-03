import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VideoContext from "./contexts/VideoContext";
import HomePage from "./pages/HomePage";
import { useVideos } from "./utils/useVideos";

const App = () => {
  const { videos } = useVideos();
  return (
    <VideoContext.Provider value={videos}>
      <Router>
        <Route path="/search/:keyword" component={HomePage} />
        <Route path="/" component={HomePage} exact />
      </Router>
    </VideoContext.Provider>
  );
};

export default App;
