import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Homefolder/Home";
import LayOut from "./layout/LayOut";
import MovieDetailsPage from "./components/Homefolder/MovieDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/moviedetailspage/:id" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
