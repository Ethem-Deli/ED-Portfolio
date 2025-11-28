import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "@/react-app/i18n/config";

// Components
import Navbar from "@/react-app/components/Navbar";
import Footer from "@/react-app/components/Footer";

// Pages
import HomePage from "@/react-app/pages/Home";
import CVPage from "@/react-app/pages/CV";
import StudiesPage from "@/react-app/pages/Studies";
import CertificatesPage from "@/react-app/pages/Certificates";
import ProjectsPage from "@/react-app/pages/Projects";
import ContactPage from "@/react-app/pages/Contact";

// CV Pages
import English from "@/react-app/pages/cv/English";
import Arabic from "@/react-app/pages/cv/Arabic";
import Turkish from "@/react-app/pages/cv/Turkish";
import Tagalog from "@/react-app/pages/cv/Tagalog";

// Project Sub-Pages
import SchoolProjects from "@/react-app/pages/projects/school-projects";
import PersonalProjects from "@/react-app/pages/projects/personal-projects";
import ClientProjects from "@/react-app/pages/projects/client-projects";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/cv" element={<CVPage />} />
              <Route path="/studies" element={<StudiesPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* CV Pages */}
              <Route path="/cv/english" element={<English />} />
              <Route path="/cv/arabic" element={<Arabic />} />
              <Route path="/cv/turkish" element={<Turkish />} />
              <Route path="/cv/tagalog" element={<Tagalog />} />

              {/* Project Sub-Pages */}
              <Route path="/projects/school-projects" element={<SchoolProjects />} />
              <Route path="/projects/personal-projects" element={<PersonalProjects />} />
              <Route path="/projects/client-projects" element={<ClientProjects />} />

              {/* Optional: 404 Page will be imlemented here later*/}
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}