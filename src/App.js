import CampaignCreationForm from "./pages/CreateCampaign/CampaignCreationForm";
import CampaignCreationWYSIWYGForm from "./pages/CreateCampaign/CampaignCreationWYSIWYGForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/styles/GlobalStyles";
import SingleCampaign from "./pages/SingleCampaign";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";

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
