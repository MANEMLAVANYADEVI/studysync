import { useEffect, useState } from "react";
import "./App.css";

// =====================================================
// MOCK TEST DATA
// StudySync Practice Papers
// =====================================================

const mockTestData = {
  Mathematics: {
    code: "MATH",
    icon: "📐",
    tests: [
      {
        id: "math-1",
        title: "Mathematics Practice Paper 1",
        duration: 15,
        questions: [
          {
            question: "If x² - 5x + 6 = 0, the values of x are:",
            options: ["1, 6", "2, 3", "3, 4", "2, 4"],
            answer: 1,
          },
          {
            question: "The HCF of 24 and 36 is:",
            options: ["6", "8", "12", "18"],
            answer: 2,
          },
          {
            question: "The value of √144 is:",
            options: ["10", "11", "12", "14"],
            answer: 2,
          },
          {
            question: "The sum of the angles of a triangle is:",
            options: ["90°", "180°", "270°", "360°"],
            answer: 1,
          },
          {
            question: "If a = 5 and b = 3, then a² + b² is:",
            options: ["25", "30", "34", "36"],
            answer: 2,
          },
          {
            question: "The probability of getting a head when a fair coin is tossed is:",
            options: ["0", "1/4", "1/2", "1"],
            answer: 2,
          },
          {
            question: "The area of a rectangle with length 8 cm and breadth 5 cm is:",
            options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
            answer: 2,
          },
          {
            question: "The common difference of 3, 7, 11, 15 is:",
            options: ["2", "3", "4", "5"],
            answer: 2,
          },
          {
            question: "The value of 2³ × 2² is:",
            options: ["16", "24", "32", "64"],
            answer: 2,
          },
          {
            question: "A linear equation in one variable has:",
            options: ["One variable", "Two variables", "Three variables", "No variable"],
            answer: 0,
          },
        ],
      },
    ],
  },

  "General Science": {
    code: "SCI",
    icon: "🔬",
    tests: [
      {
        id: "science-1",
        title: "General Science Practice Paper 1",
        duration: 15,
        questions: [
          {
            question: "The SI unit of electric current is:",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            answer: 1,
          },
          {
            question: "Which gas is essential for respiration?",
            options: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"],
            answer: 2,
          },
          {
            question: "The process by which plants prepare food is called:",
            options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
            answer: 1,
          },
          {
            question: "Which organ pumps blood throughout the body?",
            options: ["Lungs", "Kidney", "Heart", "Brain"],
            answer: 2,
          },
          {
            question: "The basic unit of life is:",
            options: ["Tissue", "Cell", "Organ", "Atom"],
            answer: 1,
          },
          {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: 1,
          },
          {
            question: "Water boils at normal atmospheric pressure at:",
            options: ["50°C", "75°C", "100°C", "150°C"],
            answer: 2,
          },
          {
            question: "Which blood cells help fight infections?",
            options: ["RBC", "WBC", "Platelets", "Plasma"],
            answer: 1,
          },
          {
            question: "The force that pulls objects towards Earth is:",
            options: ["Friction", "Magnetism", "Gravity", "Pressure"],
            answer: 2,
          },
          {
            question: "Which part of a plant absorbs water from soil?",
            options: ["Leaf", "Stem", "Flower", "Root"],
            answer: 3,
          },
        ],
      },
    ],
  },

  "Social Studies": {
    code: "SOC",
    icon: "🌍",
    tests: [
      {
        id: "social-1",
        title: "Social Studies Practice Paper 1",
        duration: 15,
        questions: [
          {
            question: "The Indian Constitution came into effect on:",
            options: [
              "15 August 1947",
              "26 January 1950",
              "26 November 1949",
              "2 October 1950",
            ],
            answer: 1,
          },
          {
            question: "The capital of India is:",
            options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
            answer: 2,
          },
          {
            question: "The largest continent is:",
            options: ["Africa", "Asia", "Europe", "Australia"],
            answer: 1,
          },
          {
            question: "The Indian Parliament consists of:",
            options: [
              "One House",
              "Two Houses",
              "Three Houses",
              "Four Houses",
            ],
            answer: 1,
          },
          {
            question: "The currency of India is:",
            options: ["Dollar", "Rupee", "Pound", "Yen"],
            answer: 1,
          },
          {
            question: "The Tropic of Cancer passes through:",
            options: ["India", "Australia", "Russia", "Canada"],
            answer: 0,
          },
          {
            question: "Democracy means government by:",
            options: ["A king", "The military", "The people", "Judges"],
            answer: 2,
          },
          {
            question: "The main occupation of many people in rural India is:",
            options: ["Agriculture", "Mining", "Banking", "Software"],
            answer: 0,
          },
          {
            question: "The Himalayas are located in the:",
            options: [
              "Northern part of India",
              "Southern part",
              "Western part",
              "Central part",
            ],
            answer: 0,
          },
          {
            question: "The national animal of India is:",
            options: ["Lion", "Elephant", "Tiger", "Peacock"],
            answer: 2,
          },
        ],
      },
    ],
  },

  English: {
    code: "ENG",
    icon: "📖",
    tests: [
      {
        id: "english-1",
        title: "English Practice Paper 1",
        duration: 15,
        questions: [
          {
            question: "Choose the correct synonym of 'happy':",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            answer: 1,
          },
          {
            question: "Choose the correct plural form of 'child':",
            options: ["Childs", "Childes", "Children", "Childrens"],
            answer: 2,
          },
          {
            question: "Identify the noun: 'The boy reads a book.'",
            options: ["Reads", "The", "Boy", "A"],
            answer: 2,
          },
          {
            question: "Choose the correct article: 'He is ___ honest man.'",
            options: ["a", "an", "the", "no article"],
            answer: 1,
          },
          {
            question: "Choose the correct past tense of 'go':",
            options: ["Goed", "Gone", "Went", "Going"],
            answer: 2,
          },
          {
            question: "The opposite of 'ancient' is:",
            options: ["Old", "Modern", "Historic", "Past"],
            answer: 1,
          },
          {
            question: "Choose the correctly spelled word:",
            options: ["Beautifull", "Beautiful", "Beutiful", "Beautifal"],
            answer: 1,
          },
          {
            question: "Which word is an adjective?",
            options: ["Quickly", "Beauty", "Beautiful", "Run"],
            answer: 2,
          },
          {
            question: "Choose the correct sentence:",
            options: [
              "She go to school.",
              "She goes to school.",
              "She going school.",
              "She gone school.",
            ],
            answer: 1,
          },
          {
            question: "A group of words that makes complete sense is called a:",
            options: ["Letter", "Sentence", "Sound", "Syllable"],
            answer: 1,
          },
        ],
      },
    ],
  },

  Telugu: {
    code: "TEL",
    icon: "📝",
    tests: [
      {
        id: "telugu-1",
        title: "Telugu Practice Paper 1",
        duration: 15,
        questions: [
          {
            question: "తెలుగు భాష ఏ భాషా కుటుంబానికి చెందుతుంది?",
            options: ["ద్రావిడ", "ఆర్య", "రోమన్", "గ్రీక్"],
            answer: 0,
          },
          {
            question: "తెలుగు వర్ణమాలలో అచ్చులు ఏవి?",
            options: [
              "స్వరాలు",
              "వ్యంజనాలు",
              "గుణింతాలు",
              "వత్తులు",
            ],
            answer: 0,
          },
          {
            question: "‘అమ్మ’ అనే పదంలో ఎన్ని అక్షరాలు ఉన్నాయి?",
            options: ["1", "2", "3", "4"],
            answer: 1,
          },
          {
            question: "‘పెద్ద’ అనే పదానికి వ్యతిరేక పదం:",
            options: ["చిన్న", "మంచి", "ఎక్కువ", "నెమ్మది"],
            answer: 0,
          },
          {
            question: "‘సూర్యుడు’ అనే పదానికి సమానార్థక పదం:",
            options: ["చంద్రుడు", "భానుడు", "నక్షత్రం", "ఆకాశం"],
            answer: 1,
          },
          {
            question: "క్రియను సూచించే పదాన్ని ఏమంటారు?",
            options: ["నామవాచకం", "క్రియ", "విశేషణం", "సర్వనామం"],
            answer: 1,
          },
          {
            question: "‘పుస్తకం’ ఏ పదభేదానికి చెందుతుంది?",
            options: ["నామవాచకం", "క్రియ", "విశేషణం", "అవ్యయం"],
            answer: 0,
          },
          {
            question: "‘మంచి బాలుడు’ లో ‘మంచి’ ఏది?",
            options: ["నామవాచకం", "క్రియ", "విశేషణం", "సర్వనామం"],
            answer: 2,
          },
          {
            question: "తెలుగు లిపి ఏ దిశలో వ్రాయబడుతుంది?",
            options: [
              "కుడి నుండి ఎడమకు",
              "ఎడమ నుండి కుడికి",
              "పై నుండి కిందకు",
              "కింద నుండి పైకి",
            ],
            answer: 1,
          },
          {
            question: "‘నేను పాఠశాలకు వెళ్తాను’ అనే వాక్యంలో కర్త:",
            options: ["పాఠశాలకు", "వెళ్తాను", "నేను", "అనే"],
            answer: 2,
          },
        ],
      },
    ],
  },

  Hindi: {
    code: "HIN",
    icon: "🪔",
    tests: [
      {
        id: "hindi-1",
        title: "Hindi Practice Paper 1",
        duration: 15,
        questions: [
          {
            question: "हिंदी भाषा की लिपि कौन-सी है?",
            options: ["रोमन", "देवनागरी", "गुरुमुखी", "उर्दू"],
            answer: 1,
          },
          {
            question: "'दिन' का विलोम शब्द क्या है?",
            options: ["सुबह", "रात", "शाम", "दोपहर"],
            answer: 1,
          },
          {
            question: "'जल' का पर्यायवाची शब्द है:",
            options: ["आकाश", "पानी", "धरती", "अग्नि"],
            answer: 1,
          },
          {
            question: "'लड़का' का स्त्रीलिंग क्या है?",
            options: ["लड़की", "बच्ची", "महिला", "स्त्री"],
            answer: 0,
          },
          {
            question: "'सुंदर' किस प्रकार का शब्द है?",
            options: ["संज्ञा", "क्रिया", "विशेषण", "सर्वनाम"],
            answer: 2,
          },
          {
            question: "'राम स्कूल जाता है' में कर्ता कौन है?",
            options: ["स्कूल", "जाता है", "राम", "है"],
            answer: 2,
          },
          {
            question: "'बड़ा' का विलोम शब्द है:",
            options: ["लंबा", "छोटा", "ऊँचा", "मोटा"],
            answer: 1,
          },
          {
            question: "'पुस्तक' का अर्थ है:",
            options: ["किताब", "कलम", "कागज", "विद्यालय"],
            answer: 0,
          },
          {
            question: "'मैं पढ़ता हूँ' में क्रिया कौन-सी है?",
            options: ["मैं", "पढ़ता हूँ", "हूँ", "कोई नहीं"],
            answer: 1,
          },
          {
            question: "'जल्दी' का विलोम शब्द है:",
            options: ["शीघ्र", "धीरे", "तेज", "अब"],
            answer: 1,
          },
        ],
      },
    ],
  },
};


// =====================================================
// DASHBOARD
// =====================================================

function Dashboard({
  tasks,
  completedTasks,
  totalTasks,
  progress,
  setActivePage,
}) {
  const upcomingTasks = tasks
    .filter((task) => !task.completed)
    .slice(0, 4);

  return (
    <>
      <div className="hero-card">
        <div>
          <p className="small-title">WELCOME TO STUDYSYNC</p>

          <h2>
            Plan smarter.
            <br />
            Study better.
          </h2>

          <p>
            Organize your subjects, schedule your study sessions,
            prepare for exams and track your progress in one place.
          </p>

          <button
            className="primary-button"
            onClick={() => setActivePage("planner")}
          >
            + Add Study Session
          </button>
        </div>

        <div className="hero-icon">📚</div>
      </div>

      <div className="section-title">
        <h2>Study Overview</h2>
        <p>Keep track of your study progress</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>📚</span>
          <h3>{totalTasks}</h3>
          <p>Total Sessions</p>
        </div>

        <div className="stat-card">
          <span>✅</span>
          <h3>{completedTasks}</h3>
          <p>Completed</p>
        </div>

        <div className="stat-card">
          <span>⏳</span>
          <h3>{totalTasks - completedTasks}</h3>
          <p>Pending</p>
        </div>

        <div className="stat-card">
          <span>📈</span>
          <h3>{progress}%</h3>
          <p>Completion</p>
        </div>
      </div>

      <div className="section-title">
        <h2>Quick Access</h2>
        <p>Jump directly to your study tools</p>
      </div>

      <div className="quick-grid">
        <button onClick={() => setActivePage("planner")}>
          <span>📝</span>
          <strong>Study Planner</strong>
          <small>Create and manage your study sessions.</small>
        </button>

        <button onClick={() => setActivePage("subjects")}>
          <span>📖</span>
          <strong>Subjects & Chapters</strong>
          <small>Keep your subjects and chapters organized.</small>
        </button>

        <button onClick={() => setActivePage("mock-tests")}>
          <span>🧠</span>
          <strong>Mock Tests</strong>
          <small>Practice with subject-wise tests.</small>
        </button>
      </div>

      <div className="recent-section">
        <div className="section-title">
          <h2>Upcoming Study Sessions</h2>
          <p>Your next planned sessions</p>
        </div>

        {upcomingTasks.length === 0 ? (
          <div className="empty-state">
            <span>📅</span>
            <h3>No upcoming sessions</h3>
            <p>Add a study session to start planning.</p>

            <button
              className="save-button"
              onClick={() => setActivePage("planner")}
            >
              Add Session
            </button>
          </div>
        ) : (
          <div className="recent-list">
            {upcomingTasks.map((task) => (
              <div className="recent-task" key={task.id}>
                <div>
                  <strong>{task.topic}</strong>

                  <small>
                    {task.subject} • {task.date} • {task.time}
                  </small>
                </div>

                <span
                  className={`priority-badge ${task.priority.toLowerCase()}`}
                >
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}


// =====================================================
// STUDY PLANNER
// =====================================================

function StudyPlanner({
  tasks,
  addTask,
  updateTask,
  deleteTask,
  toggleTask,
  editingTask,
  setEditingTask,
}) {
  const [formData, setFormData] = useState({
    subject: "",
    topic: "",
    date: "",
    time: "",
    priority: "Medium",
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTask) {
      setFormData({
        subject: editingTask.subject,
        topic: editingTask.topic,
        date: editingTask.date,
        time: editingTask.time,
        priority: editingTask.priority,
      });
    } else {
      setFormData({
        subject: "",
        topic: "",
        date: "",
        time: "",
        priority: "Medium",
      });
    }

    setError("");
  }, [editingTask]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.subject.trim() ||
      !formData.topic.trim() ||
      !formData.date ||
      !formData.time
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    if (editingTask) {
      updateTask(editingTask.id, formData);
    } else {
      addTask(formData);
    }

    setFormData({
      subject: "",
      topic: "",
      date: "",
      time: "",
      priority: "Medium",
    });

    setEditingTask(null);
    setError("");
  };

  const handleCancel = () => {
    setEditingTask(null);

    setFormData({
      subject: "",
      topic: "",
      date: "",
      time: "",
      priority: "Medium",
    });

    setError("");
  };

  const filteredTasks = tasks.filter((task) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      task.subject.toLowerCase().includes(searchText) ||
      task.topic.toLowerCase().includes(searchText);

    const matchesFilter =
      filter === "All" ||
      (filter === "Completed" && task.completed) ||
      (filter === "Pending" && !task.completed) ||
      task.priority === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <div className="planner-header">
        <div>
          <h2>Study Planner</h2>
          <p>
            Schedule subjects, set priorities and track completion.
          </p>
        </div>

        <div className="planner-count">
          {tasks.length} Sessions
        </div>
      </div>

      <div className="planner-form-card">
        <h3>
          {editingTask ? "Edit Study Session" : "Add Study Session"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Example: Mathematics"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="topic">Chapter / Topic</label>

              <input
                id="topic"
                name="topic"
                type="text"
                value={formData.topic}
                onChange={handleChange}
                placeholder="Example: Quadratic Equations"
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="study-date">Study Date</label>

              <input
                id="study-date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="study-time">Study Time</label>

              <input
                id="study-time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>

              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {error && <div className="form-error">{error}</div>}

          <div className="form-buttons">
            <button className="save-button" type="submit">
              {editingTask ? "Update Session" : "Save Session"}
            </button>

            {editingTask && (
              <button
                className="cancel-button"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="planner-tools">
        <input
          type="text"
          placeholder="🔍 Search subject or topic..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="All">All Sessions</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </div>

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <span>📚</span>
            <h3>No study sessions found</h3>
            <p>
              Add a session or change your search/filter.
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              className={`task-card ${
                task.completed ? "completed" : ""
              }`}
              key={task.id}
            >
              <button
                type="button"
                className={`check-button ${
                  task.completed ? "checked" : ""
                }`}
                onClick={() => toggleTask(task.id)}
                title="Mark complete"
              >
                {task.completed ? "✓" : ""}
              </button>

              <div className="task-details">
                <div className="task-title-row">
                  <h3>{task.topic}</h3>

                  <span
                    className={`priority-badge ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>
                </div>

                <p>{task.subject}</p>

                <div className="task-meta">
                  <span>📅 {task.date}</span>
                  <span>⏰ {task.time}</span>
                </div>
              </div>

              <div className="task-actions">
                <button
                  type="button"
                  onClick={() => setEditingTask(task)}
                  title="Edit"
                >
                  ✏️
                </button>

                <button
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}


// =====================================================
// SUBJECTS
// =====================================================

function Subjects() {
  const subjects = [
    {
      icon: "📐",
      name: "Mathematics",
      chapters: "12 Chapters",
    },
    {
      icon: "🔬",
      name: "General Science",
      chapters: "10 Chapters",
    },
    {
      icon: "🌍",
      name: "Social Studies",
      chapters: "9 Chapters",
    },
    {
      icon: "📖",
      name: "English",
      chapters: "8 Chapters",
    },
    {
      icon: "📝",
      name: "Telugu",
      chapters: "Practice",
    },
    {
      icon: "🪔",
      name: "Hindi",
      chapters: "Practice",
    },
  ];

  return (
    <div className="page-card">
      <h2>Subjects & Chapters</h2>

      <p>
        Organize your subjects and keep track of important chapters.
      </p>

      <div className="subject-grid">
        {subjects.map((subject) => (
          <div key={subject.name}>
            <span>{subject.icon}</span>

            <strong>{subject.name}</strong>

            <small>{subject.chapters}</small>
          </div>
        ))}
      </div>
    </div>
  );
}


// =====================================================
// MOCK TEST CENTRE
// =====================================================

function MockTests() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [timeLeft, setTimeLeft] = useState(0);

  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // ---------------------------------------------------
  // TIMER
  // ---------------------------------------------------

  useEffect(() => {
    if (!selectedTest || submitted) {
      return;
    }

    if (timeLeft <= 0) {
      setSubmitted(true);
      calculateScore();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, selectedTest, submitted]);

  // ---------------------------------------------------
  // START TEST
  // ---------------------------------------------------

  const startTest = (subjectName, test) => {
    setSelectedSubject(subjectName);
    setSelectedTest(test);
    setAnswers({});
    setCurrentQuestion(0);
    setTimeLeft(test.duration * 60);
    setSubmitted(false);
    setScore(0);
  };

  // ---------------------------------------------------
  // SELECT ANSWER
  // ---------------------------------------------------

  const selectAnswer = (optionIndex) => {
    if (submitted) return;

    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion]: optionIndex,
    }));
  };

  // ---------------------------------------------------
  // CALCULATE SCORE
  // ---------------------------------------------------

  const calculateScore = () => {
    if (!selectedTest) return;

    let totalCorrect = 0;

    selectedTest.questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        totalCorrect++;
      }
    });

    setScore(totalCorrect);
  };

  // ---------------------------------------------------
  // SUBMIT TEST
  // ---------------------------------------------------

  const submitTest = () => {
    calculateScore();
    setSubmitted(true);
  };

  // ---------------------------------------------------
  // RETRY
  // ---------------------------------------------------

  const retryTest = () => {
    if (!selectedSubject || !selectedTest) return;

    startTest(selectedSubject, selectedTest);
  };

  // ---------------------------------------------------
  // BACK
  // ---------------------------------------------------

  const backToTests = () => {
    setSelectedSubject(null);
    setSelectedTest(null);
    setAnswers({});
    setCurrentQuestion(0);
    setSubmitted(false);
    setScore(0);
    setTimeLeft(0);
  };

  // ---------------------------------------------------
  // FORMAT TIMER
  // ---------------------------------------------------

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  // ===================================================
  // RESULT SCREEN
  // ===================================================

  if (selectedTest && submitted) {
    const totalQuestions = selectedTest.questions.length;

    const percentage = Math.round(
      (score / totalQuestions) * 100
    );

    const wrongAnswers = totalQuestions - score;

    const unanswered = selectedTest.questions.filter(
      (_, index) => answers[index] === undefined
    ).length;

    return (
      <div className="mock-page">

        <div className="mock-result-card">

          <div className="result-icon">
            {percentage >= 80
              ? "🏆"
              : percentage >= 50
              ? "🎯"
              : "📚"}
          </div>

          <p className="mock-eyebrow">
            TEST COMPLETED
          </p>

          <h2>{selectedTest.title}</h2>

          <p className="result-message">
            Here is your StudySync practice result.
          </p>

          <div className="result-score">
            <strong>{percentage}%</strong>
            <span>
              {score} / {totalQuestions} Correct
            </span>
          </div>

          <div className="result-stats">

            <div>
              <strong>{score}</strong>
              <span>Correct</span>
            </div>

            <div>
              <strong>{wrongAnswers}</strong>
              <span>Wrong</span>
            </div>

            <div>
              <strong>{unanswered}</strong>
              <span>Unanswered</span>
            </div>

          </div>

          <div className="result-actions">

            <button
              className="test-start-button"
              onClick={retryTest}
            >
              Retry Test
            </button>

            <button
              className="mock-back-button"
              onClick={backToTests}
            >
              Back to Mock Tests
            </button>

          </div>

          <div className="answer-review">

            <h3>Answer Review</h3>

            {selectedTest.questions.map(
              (question, index) => {

                const userAnswer = answers[index];

                const isCorrect =
                  userAnswer === question.answer;

                return (
                  <div
                    className={`review-item ${
                      isCorrect
                        ? "review-correct"
                        : "review-wrong"
                    }`}
                    key={index}
                  >

                    <div className="review-number">
                      {index + 1}
                    </div>

                    <div className="review-content">

                      <strong>
                        {question.question}
                      </strong>

                      <p>
                        Your answer:{" "}
                        <span>
                          {userAnswer === undefined
                            ? "Not answered"
                            : question.options[
                                userAnswer
                              ]}
                        </span>
                      </p>

                      {!isCorrect && (
                        <p>
                          Correct answer:{" "}
                          <span>
                            {question.options[
                              question.answer
                            ]}
                          </span>
                        </p>
                      )}

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>

      </div>
    );
  }

  // ===================================================
  // QUESTION SCREEN
  // ===================================================

  if (selectedTest) {
    const question =
      selectedTest.questions[currentQuestion];

    const totalQuestions =
      selectedTest.questions.length;

    const isLastQuestion =
      currentQuestion === totalQuestions - 1;

    return (
      <div className="mock-page">

        <div className="mock-test-top">

          <button
            className="mock-back-button"
            onClick={backToTests}
          >
            ← Exit Test
          </button>

          <div className="mock-live-info">

            <span>
              {selectedSubject}
            </span>

            <strong>
              {formatTime(timeLeft)}
            </strong>

          </div>

        </div>

        <div className="question-progress">

          <div>
            Question {currentQuestion + 1} of{" "}
            {totalQuestions}
          </div>

          <div className="question-progress-bar">

            <div
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    totalQuestions) *
                  100
                }%`,
              }}
            ></div>

          </div>

        </div>

        <div className="question-card">

          <div className="question-number">
            QUESTION {currentQuestion + 1}
          </div>

          <h2>{question.question}</h2>

          <div className="answer-options">

            {question.options.map(
              (option, index) => {

                const selected =
                  answers[currentQuestion] === index;

                return (
                  <button
                    key={index}
                    className={`answer-option ${
                      selected
                        ? "selected-answer"
                        : ""
                    }`}
                    onClick={() =>
                      selectAnswer(index)
                    }
                  >

                    <span className="option-letter">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <span>{option}</span>

                    <span className="option-check">
                      {selected ? "✓" : ""}
                    </span>

                  </button>
                );
              }
            )}

          </div>

          <div className="question-actions">

            <button
              className="mock-back-button"
              disabled={currentQuestion === 0}
              onClick={() =>
                setCurrentQuestion(
                  (previous) => previous - 1
                )
              }
            >
              ← Previous
            </button>

            {!isLastQuestion ? (
              <button
                className="test-start-button"
                onClick={() =>
                  setCurrentQuestion(
                    (previous) => previous + 1
                  )
                }
              >
                Next →
              </button>
            ) : (
              <button
                className="test-submit-button"
                onClick={submitTest}
              >
                Submit Test ✓
              </button>
            )}

          </div>

        </div>

        <div className="question-map">

          <p>Questions</p>

          <div>
            {selectedTest.questions.map(
              (_, index) => (
                <button
                  key={index}
                  className={`question-map-button ${
                    currentQuestion === index
                      ? "current-question"
                      : ""
                  } ${
                    answers[index] !== undefined
                      ? "answered-question"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentQuestion(index)
                  }
                >
                  {index + 1}
                </button>
              )
            )}
          </div>

        </div>

      </div>
    );
  }

  // ===================================================
  // TEST SELECTION FOR SUBJECT
  // ===================================================

  if (selectedSubject) {
    const subjectData =
      mockTestData[selectedSubject];

    return (
      <div className="mock-page">

        <button
          className="mock-back-button"
          onClick={() => setSelectedSubject(null)}
        >
          ← Back to Subjects
        </button>

        <div className="mock-subject-header">

          <div className="mock-subject-icon">
            {subjectData.icon}
          </div>

          <div>
            <p className="mock-eyebrow">
              STUDYSYNC PRACTICE
            </p>

            <h2>{selectedSubject}</h2>

            <p>
              Choose a practice paper and start
              testing your preparation.
            </p>
          </div>

        </div>

        <div className="test-type-list">

          {subjectData.tests.map((test, index) => (

            <div
              className="test-type-card"
              key={test.id}
            >

              <div className="test-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="test-type-details">

                <h3>{test.title}</h3>

                <div className="test-meta">
                  <span>
                    📝 {test.questions.length} Questions
                  </span>

                  <span>
                    ⏱️ {test.duration} Minutes
                  </span>

                  <span>
                    ✓ MCQ
                  </span>
                </div>

              </div>

              <button
                className="test-start-button"
                onClick={() =>
                  startTest(
                    selectedSubject,
                    test
                  )
                }
              >
                Start Test →
              </button>

            </div>

          ))}

        </div>

        <div className="mock-info-panel">

          <strong>Practice Paper</strong>

          <p>
            These questions are StudySync practice
            content designed for learning and revision.
          </p>

        </div>

      </div>
    );
  }

  // ===================================================
  // SUBJECT SELECTION
  // ===================================================

  return (
    <div className="mock-page">

      <div className="mock-main-header">

        <div>

          <p className="mock-eyebrow">
            STUDYSYNC PRACTICE CENTRE
          </p>

          <h2>Mock Tests</h2>

          <p>
            Test your preparation with subject-wise
            practice papers.
          </p>

        </div>

        <div className="mock-header-stat">

          <strong>
            {Object.keys(mockTestData).length}
          </strong>

          <span>
            Subjects
          </span>

        </div>

      </div>

      <div className="professional-mock-grid">

        {Object.entries(mockTestData).map(
          ([subjectName, subject]) => (

            <div
              className="professional-mock-card"
              key={subjectName}
            >

              <div className="mock-card-heading">

                <div className="mock-subject-icon">
                  {subject.icon}
                </div>

                <span className="mock-subject-code-small">
                  {subject.code}
                </span>

              </div>

              <h3>{subjectName}</h3>

              <p>
                {subject.tests.length} Practice Paper
                {subject.tests.length > 1
                  ? "s"
                  : ""}
              </p>

              <div className="mock-card-footer">

                <span>
                  📝{" "}
                  {subject.tests.reduce(
                    (total, test) =>
                      total + test.questions.length,
                    0
                  )}{" "}
                  Questions
                </span>

                <button
                  className="test-start-button"
                  onClick={() =>
                    setSelectedSubject(subjectName)
                  }
                >
                  View Tests →
                </button>

              </div>

            </div>

          )
        )}

      </div>

      <div className="mock-bottom-section">

        <div>
          <strong>How Mock Tests Work</strong>

          <p>
            Select a subject → choose a paper →
            answer the MCQs → submit → review your
            result.
          </p>
        </div>

        <div className="mock-steps">

          <span>01 Select</span>
          <span>02 Attempt</span>
          <span>03 Submit</span>
          <span>04 Review</span>

        </div>

      </div>

    </div>
  );
}


// =====================================================
// PROGRESS
// =====================================================

function Progress({
  totalTasks,
  completedTasks,
  progress,
}) {
  return (
    <div className="page-card">

      <h2>My Progress</h2>

      <p>
        Track how consistently you are completing
        your study plan.
      </p>

      <div className="progress-box">

        <h3>Study Completion</h3>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

        <strong>
          {progress}% Completed
        </strong>

        <p>
          {completedTasks} of {totalTasks} study
          sessions completed.
        </p>

      </div>

    </div>
  );
}



// =====================================================
// QUICK NOTES
// =====================================================

function QuickNotes() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("studysync_notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("studysync_notes", JSON.stringify(notes));
  }, [notes]);

  const saveNote = () => {
    if (!title.trim() || !content.trim()) {
      window.alert("Please enter both a title and note.");
      return;
    }

    if (editingId !== null) {
      setNotes((previousNotes) =>
        previousNotes.map((note) =>
          note.id === editingId
            ? {
                ...note,
                title: title.trim(),
                content: content.trim(),
              }
            : note
        )
      );
    } else {
      const newNote = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date().toLocaleDateString(),
      };

      setNotes((previousNotes) => [newNote, ...previousNotes]);
    }

    setTitle("");
    setContent("");
    setEditingId(null);
  };

  const editNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  const deleteNote = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) return;

    setNotes((previousNotes) =>
      previousNotes.filter((note) => note.id !== id)
    );

    if (editingId === id) {
      setEditingId(null);
      setTitle("");
      setContent("");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle("");
    setContent("");
  };

  const filteredNotes = notes.filter((note) => {
    const searchText = search.toLowerCase();

    return (
      note.title.toLowerCase().includes(searchText) ||
      note.content.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="page-card">
      <div className="planner-header">
        <div>
          <h2>Quick Notes</h2>
          <p>
            Save formulas, important points, reminders and revision notes.
          </p>
        </div>

        <div className="planner-count">
          {notes.length} Notes
        </div>
      </div>

      <div className="planner-form-card">
        <h3>{editingId !== null ? "Edit Note" : "Create a Note"}</h3>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="note-title">Note Title</label>

            <input
              id="note-title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Example: Maths Formulas"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="note-content">Note</label>

          <textarea
            id="note-content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Write your important points here..."
            rows="6"
            style={{
              width: "100%",
              boxSizing: "border-box",
              resize: "vertical",
              padding: "12px",
              border: "1px solid #d0d5dd",
              borderRadius: "10px",
              outline: "none",
              font: "inherit",
            }}
          />
        </div>

        <div className="form-buttons">
          <button className="save-button" type="button" onClick={saveNote}>
            {editingId !== null ? "Update Note" : "Save Note"}
          </button>

          {editingId !== null && (
            <button
              className="cancel-button"
              type="button"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="planner-tools">
        <input
          type="text"
          placeholder="🔍 Search notes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {filteredNotes.length === 0 ? (
        <div className="empty-state">
          <span>📝</span>
          <h3>No notes found</h3>
          <p>Create a note to keep your important study points in one place.</p>
        </div>
      ) : (
        <div className="task-list">
          {filteredNotes.map((note) => (
            <div className="task-card" key={note.id}>
              <div className="task-details">
                <div className="task-title-row">
                  <h3>{note.title}</h3>

                  <span className="priority-badge medium">
                    {note.createdAt}
                  </span>
                </div>

                <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
                  {note.content}
                </p>
              </div>

              <div className="task-actions">
                <button
                  type="button"
                  onClick={() => editNote(note)}
                  title="Edit note"
                >
                  ✏️
                </button>

                <button
                  type="button"
                  onClick={() => deleteNote(note.id)}
                  title="Delete note"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// =====================================================
// =====================================================
// FOCUS MODE
// =====================================================

function FocusMode() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [subject, setSubject] = useState("General Study");
  const [completedSessions, setCompletedSessions] = useState(() => {
    const saved = localStorage.getItem("studysync_focus_sessions");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem(
      "studysync_focus_sessions",
      String(completedSessions)
    );
  }, [completedSessions]);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          setCompletedSessions((previous) => previous + 1);
          window.alert("🎉 Focus session completed! Take a short break.");
          return 25 * 60;
        }
        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  const progress = Math.round(((25 * 60 - timeLeft) / (25 * 60)) * 100);

  return (
    <div className="page-card">
      <div className="planner-header">
        <div>
          <h2>Focus Mode</h2>
          <p>Use a 25-minute Pomodoro session to concentrate on one study task.</p>
        </div>
        <div className="planner-count">{completedSessions} Sessions</div>
      </div>

      <div
        style={{
          maxWidth: "620px",
          margin: "30px auto",
          textAlign: "center",
          padding: "30px 20px",
          borderRadius: "18px",
          background: "#f7f9fc",
          border: "1px solid #e4e7ec",
        }}
      >
        <div className="form-group" style={{ textAlign: "left", marginBottom: "24px" }}>
          <label htmlFor="focus-subject">What are you studying?</label>
          <input
            id="focus-subject"
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder="Example: Mathematics - Algebra"
            disabled={isRunning}
            autoComplete="off"
          />
        </div>

        <div
          style={{
            fontSize: "clamp(58px, 12vw, 92px)",
            fontWeight: "700",
            letterSpacing: "3px",
            margin: "20px 0 10px",
          }}
        >
          {minutes}:{seconds}
        </div>

        <p style={{ margin: "0 0 22px", color: "#667085" }}>
          Current focus: <strong>{subject || "General Study"}</strong>
        </p>

        <div
          style={{
            height: "9px",
            background: "#e4e7ec",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#1d4ed8",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <button
            className="save-button"
            type="button"
            onClick={() => setIsRunning((previous) => !previous)}
          >
            {isRunning ? "⏸ Pause" : "▶ Start"}
          </button>

          <button className="cancel-button" type="button" onClick={resetTimer}>
            🔄 Reset
          </button>
        </div>
      </div>

      <div className="stats-grid" style={{ marginTop: "20px" }}>
        <div className="stat-card">
          <span>⏱️</span>
          <div><h3>25 min</h3><p>Session Length</p></div>
        </div>
        <div className="stat-card">
          <span>🎯</span>
          <div><h3>{completedSessions}</h3><p>Completed Sessions</p></div>
        </div>
        <div className="stat-card">
          <span>📚</span>
          <div><h3>{subject || "Study"}</h3><p>Current Focus</p></div>
        </div>
      </div>
    </div>
  );
}


// MAIN APP
// =====================================================

function App() {
  const [activePage, setActivePage] =
    useState("dashboard");

  const [tasks, setTasks] = useState(() => {
    const savedTasks =
      localStorage.getItem("studysync_tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  const [editingTask, setEditingTask] =
    useState(null);

  // Save tasks
  useEffect(() => {
    localStorage.setItem(
      "studysync_tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // Add task
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
  };

  // Update task
  const updateTask = (
    id,
    updatedData
  ) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              ...updatedData,
            }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this study session?"
    );

    if (!confirmed) return;

    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== id
      )
    );
  };

  // Complete task
  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  const pageTitles = {
    dashboard: "Dashboard",
    planner: "Study Planner",
    subjects: "Subjects & Chapters",
    "mock-tests": "Mock Tests",
    "quick-notes": "Quick Notes",
    "focus-mode": "Focus Mode",
    progress: "My Progress",
  };

  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo">

          <span>📚</span>

          <h2>StudySync</h2>

        </div>

        <nav>

          <button
            className={
              activePage === "dashboard"
                ? "active"
                : ""
            }
            onClick={() => {
              setActivePage("dashboard");
              setEditingTask(null);
            }}
          >
            <span>🏠</span>
            <span>Dashboard</span>
          </button>

          <button
            className={
              activePage === "planner"
                ? "active"
                : ""
            }
            onClick={() =>
              setActivePage("planner")
            }
          >
            <span>📝</span>
            <span>Study Planner</span>
          </button>

          <button
            className={
              activePage === "subjects"
                ? "active"
                : ""
            }
            onClick={() => {
              setActivePage("subjects");
              setEditingTask(null);
            }}
          >
            <span>📖</span>
            <span>Subjects</span>
          </button>

          <button
            className={
              activePage === "mock-tests"
                ? "active"
                : ""
            }
            onClick={() => {
              setActivePage("mock-tests");
              setEditingTask(null);
            }}
          >
            <span>🧠</span>
            <span>Mock Tests</span>
          </button>

          <button
            className={
              activePage === "quick-notes"
                ? "active"
                : ""
            }
            onClick={() => {
              setActivePage("quick-notes");
              setEditingTask(null);
            }}
          >
            <span>📝</span>
            <span>Quick Notes</span>
          </button>

          <button
            className={
              activePage === "focus-mode"
                ? "active"
                : ""
            }
            onClick={() => {
              setActivePage("focus-mode");
              setEditingTask(null);
            }}
          >
            <span>⏱️</span>
            <span>Focus Mode</span>
          </button>

          <button
            className={
              activePage === "progress"
                ? "active"
                : ""
            }
            onClick={() => {
              setActivePage("progress");
              setEditingTask(null);
            }}
          >
            <span>📊</span>
            <span>Progress</span>
          </button>

        </nav>

        <div className="sidebar-bottom">

          <p>StudySync</p>

          <p>
            Plan • Focus • Achieve
          </p>

        </div>

      </aside>


      {/* MAIN CONTENT */}

      <main className="main-content">

        <div className="topbar">

          <div>

            <p className="welcome">
              Good luck with your studies!
            </p>

            <h1>
              {pageTitles[activePage]}
            </h1>

          </div>

          <div className="profile">

            <div className="profile-circle">
              S
            </div>

            <div>

              <strong>
                Student
              </strong>

              <small>
                10th Standard
              </small>

            </div>

          </div>

        </div>


        {/* PAGE CONTENT */}

        {activePage === "dashboard" && (
          <Dashboard
            tasks={tasks}
            completedTasks={completedTasks}
            totalTasks={totalTasks}
            progress={progress}
            setActivePage={setActivePage}
          />
        )}

        {activePage === "planner" && (
          <StudyPlanner
            tasks={tasks}
            addTask={addTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />
        )}

        {activePage === "subjects" && (
          <Subjects />
        )}

        {activePage === "mock-tests" && (
          <MockTests />
        )}

        {activePage === "quick-notes" && (
          <QuickNotes />
        )}

        {activePage === "focus-mode" && (
          <FocusMode />
        )}

        {activePage === "progress" && (
          <Progress
            totalTasks={totalTasks}
            completedTasks={completedTasks}
            progress={progress}
          />
        )}

      </main>

    </div>
  );
}

export default App;