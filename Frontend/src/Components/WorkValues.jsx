const values = [
  { 
    title: "Integrity", 
    desc: "I believe in being honest and doing the right thing, even when no one is watching." 
  },
  { 
    title: "Respect", 
    desc: "I treat others with kindness and value their perspectives, creating a positive environment." 
  },
  { 
    title: "Learning", 
    desc: "I am driven by curiosity and always seek opportunities to improve and gain new knowledge." 
  },
  { 
    title: "Open Communication", 
    desc: "I value honest and clear communication to build trust and work effectively with others." 
  },
  { 
    title: "Variety", 
    desc: "I enjoy diverse experiences and challenges that keep me learning and growing." 
  }
];


const WorkValues = () => (
    <section className="bg-blue-300 min-w-screen font-">
  <section className="p-8 max-w-4xl mx-auto min-h-screen bg-blue-300 text-white">
    <h2 className="text-2xl font-bold mb-4 text-black">My Top 5 Work Values</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {values.map((val, index) => (
        <div key={index} className="p-4 border rounded-xl shadow-sm bg-blue-500 border-blue-400">
          <h3 className="font-semibold text-lg">{val.title}</h3>
          <p>{val.desc}</p>
        </div>
      ))}
    </div>
  </section>
    </section>
);

export default WorkValues;