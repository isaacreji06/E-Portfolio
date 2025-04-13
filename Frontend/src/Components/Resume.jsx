import ResumeRebecca from '../assets/ResumeRebecca.pdf';

const Resume = () => {
  return (
    <div className="flex flex-col items-center" style={{ minHeight: "100vh", padding: "10px 0" }}>
      <iframe
        src={`${ResumeRebecca}#toolbar=0&view=FitH`}
        style={{ 
          height: "95vh", 
          width: "80%", 
          border: "1px solid #ccc",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "15px"
        }}
        title="Resume PDF"
      />
      
      <a 
        href={ResumeRebecca} 
        download="Rebecca_Reji_Resume.pdf" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;