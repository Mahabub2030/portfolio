
const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Bangladesh University Dhaka",
      year: "2016 - 2020",
      description:
        "Graduated with a strong foundation in critical thinking and problem-solving.",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary Certificate (HSC) ",
      institution: "Dhaka Broad ,Bangladesh",
      year: "2014 - 2016",
      description:
        "Completed Higher Secondary education with a focus on core academic subjects including Science,and English. Developed strong analytical and problem-solving skills. ",
      icon: "🎓",
    },
    {
      degree: "Secondary (10th)",
      institution: "Madrasa Board, Bangladesh",
      year: "2014",
      description:
        "Completed Secondary School Certificate (SSC) under the Madrasa Education Board with a strong foundation in general subjects as well as religious studies.",
      icon: "🎓",
    },
  ];

  const experience = [
    {
      role: "Data Analyst & IT Support ",
      company: "Nabatat Contracting Company (Saudi Arabia)",
      year: "2022 - Present",
      description:
        "Experienced in data analysis and technical support, with strong skills in managing client communications and ensuring timely monthly report submissions. Proficient in identifying data trends, troubleshooting IT issues, and delivering actionable insights",
      icon: "💼",
    },
    {
      role: "Computer Problem Solver",
      company: "Secura Bangladesh ,Dhaka",
      year: "2018 - 2019 ",
      description:
        "Solving computer-related issues, software installation, and system optimizations for individuals and businesses.",
      icon: "💻",
    },
  ];

  return (
    <section id="education" className="bg-gradient-to-r from-gray-950 to-gray-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12">
          Education & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
              >
                <div className="text-4xl mr-6 text-blue-500">{edu.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-200">{edu.degree}</h4>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-300 text-sm italic">{edu.year}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-300 mb-6">Experience</h3>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6"
              >
                <div className="text-4xl mr-6 text-green-500">{exp.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-200">{exp.role}</h4>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-gray-300 text-sm italic">{exp.year}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
