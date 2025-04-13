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
    <section className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Top 5 Work Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {values.map((val, index) => (
          <div key={index} className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">{val.title}</h3>
            <p>{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  export default WorkValues;
  