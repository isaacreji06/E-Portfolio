import { Link } from "react-router-dom";
import image from "../assets/RebeccaReji.jpg"

const LandingPage = () => {
  return (
    <section className="bg-gray-50 h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <img src={image} alt="Rebecca Reji" className="rounded-full w-64 mb-4 ml-72 " />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Hi, I'm Rebecca Reji
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
        Graduate Student in Biotechnology | Passionate Researcher | Future Innovator in Biotech & Pharma
        </p>
        <div className="space-x-4">
          <Link to="/about">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow">
              View My Portfolio
            </button>
          </Link>
          <a
            href="https://www.linkedin.com/in/rebecca-reji/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
