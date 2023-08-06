import CampaignCreationForm from "./pages/CreateCampaign/CampaignCreationForm/index.js";
import CampaignCreationWYSIWYGForm from "./pages/CreateCampaign/CampaignCreationWYSIWYGForm/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/styles/GlobalStyles.js";
import SingleCampaign from "./pages/SingleCampaign/index.js";
import { Home } from "./pages/Home/index.js";
import { Navbar } from "./components/Navbar/index.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<h1>Login page</h1>} />
          <Route path="/signup" element={<h1>Registration page</h1>} />
          <Route path="/campaigns/:id" element={<SingleCampaign />} />
          <Route path="/campaign-creation" element={<CampaignCreationForm />} />
          <Route path="/create-campaign" element={<CampaignCreationForm />} />
          <Route
            path="/campaign-text-editor"
            element={<CampaignCreationWYSIWYGForm />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
