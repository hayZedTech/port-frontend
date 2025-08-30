import { useState } from "react";
import Pagination from "./Pagination";
// import "./mystyle_exam.css";

export const Biology01 = () => {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [totalScore, setTotalScore] = useState(null); // ✅ Track total score

  const correctAnswers = {
    one: "A",
    two: "B",
    three: "A",
    four: "B",
    five: "A",
    six: "C",
    seven: "C",
    eight: "A",
    nine: "A",
    ten: "A"
  };

  const handleAnswerChange = (e) => {
    if (!submitted[e.target.name]) {
      setAnswers({
        ...answers,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (questionName, displayId) => {
    if (!answers[questionName]) {
      alert("⚠️ Please select an answer before submitting.");
      return;
    }

    setSubmitted({ ...submitted, [questionName]: true });

    if (answers[questionName] === correctAnswers[questionName]) {
      setFeedback({ ...feedback, [displayId]: "✅ Correct!" });
    } else {
      setFeedback({
        ...feedback,
        [displayId]: `❌ Wrong! Correct answer: ${correctAnswers[questionName]}`,
      });
    }
  };

  // ✅ New function for total score
  const handleCheckResult = () => {
    let total = 0;
    let allAnswered = true;

    Object.keys(correctAnswers).forEach((key) => {
      if (!answers[key]) {
        allAnswered = false;
      } else if (answers[key] === correctAnswers[key]) {
        total += 1;
      }
    });

    if (!allAnswered) {
      alert("⚠️ Please complete all the questions!");
      return;
    }

    setTotalScore(total);
  };

  const questions = [
    {
      id: "one",
      text: "The modification in structure, physiology, and behavior of a plant and animal is called ______",
      options: ["A", "B", "C", "D"],
      answers: ["adaptation", "evolution", "variation", "succession"]
    },
    {
      id: "two",
      text: "A bacteria that is spherically shaped is called?",
      options: ["A", "B", "C", "D"],
      answers: ["diplobacillus", "coccus", "bacillus", "vibrio"]
    },
    {
      id: "three",
      text: "The flame cells are used for excretion in",
      options: ["A", "B", "C", "D"],
      answers: ["Fluke", "Nematode", "Bacteria", "Volvox"]
    },
    {
      id: "four",
      text: "Which of the following is an example of a microorganism in action as a disease vector?",
      options: ["A", "B", "C", "D"],
      answers: ["Fungi decomposing dead plant material", "Mosquito transmitting malaria", "Bacteria causing food poisoning", "Algae producing oxygen through photosynthesis"]
    },
    {
      id: "five",
      text: "Which of the following is a characteristic of cells related to irritability?",
      options: ["A", "B", "C", "D"],
      answers: ["Ability to respond to stimuli", "Ability to synthesize proteins", "Ability to generate energy", "Ability to replicate DNA"]
    },
    {
      id: "six",
      text: "The membrane around the vacuole is known as",
      options: ["A", "B", "C", "D"],
      answers: ["Elaioplast", "Amyloplast", "Tonoplast", "Cytoplast"]
    },
    {
      id: "seven",
      text: "Which of the following is NOT a part of the alimentary canal?",
      options: ["A", "B", "C", "D"],
      answers: ["Oesophagus", "Large intestine", "Liver", "Small intestine"]
    },
    {
      id: "eight",
      text: "Which of the following is a characteristic feature of Kingdom Plantae?",
      options: ["A", "B", "C", "D"],
      answers: ["Presence of chloroplasts", "Ability to perform photosynthesis", "Lack of cell walls", "Heterotrophic mode of nutrition"]
    },
    {
      id: "nine",
      text: "A biome characterized by hot summer, warm winter and treeless vegetation is",
      options: ["A", "B", "C", "D"],
      answers: ["Steppe grasslands", "Temperate deserts", "Savannah grassland", "Tropical deserts"]
    },
    {
      id: "ten",
      text: "Which of the following is an example of physiological variation in organisms?",
      options: ["A", "B", "C", "D"],
      answers: ["Variation in blood pressure among individuals", "Variation in beak shape among finches", "Differences in fur color in rabbits", "Variation in leaf shape in plants"]
    }
  ];

  const handlePageChange = (newPage) => {
    setPage(newPage > 10 ? 1 : newPage);
  };

  return (
    <>
      <h1 className="text-primary shadow">
        <marquee>HayZed Tech</marquee>
      </h1>

      {/* ✅ Check Result Button */}
        <div className="position-absolute mt-4  pb-2  pb-lg-4 pe-3" style={{right:"0"}} >
          <button
            onClick={handleCheckResult}
            className="btn btn-success px-4 py-2"
          >
            Check Result
          </button>
          {totalScore !== null && (
            <div className="mt-3 fw-bold text-primary">
              ✅ Your Total score is: {totalScore}/10
            </div>
          )}
        </div>


      <div className="container-fluid d-flex flex-column bg-light py-4 px-3 px-lg-4 page_body">
        <h1 className="mb-4 text-primary">Page {page}</h1>
        <div className="content-container w-100 px-2 py-4 bg-white border rounded shadow-lg">
          {questions[page - 1] && (
            <div>
              <ol className="ans list-unstyled px-3">
                <li>
                  {questions[page - 1].text}
                  <ul className="list-unstyled">
                    {questions[page - 1].options.map((option, index) => (
                      <li key={index}>
                        <label>
                          <input
                            type="radio"
                            name={questions[page - 1].id}
                            value={option}
                            checked={answers[questions[page - 1].id] === option}
                            onChange={handleAnswerChange}
                            disabled={submitted[questions[page - 1].id]}
                            className="form-check-input"
                          />
                          {option}. {questions[page - 1].answers[index]}
                        </label>
                      </li>
                    ))}
                  </ul>
                </li>
              </ol>
              <div className="text-center">
                <button
                  onClick={() =>
                    handleSubmit(questions[page - 1].id, `disp${page}`)
                  }
                  disabled={submitted[questions[page - 1].id]}
                  className="px-4 py-2 rounded rounded-3"
                >
                  <b>Submit</b>
                </button>
                <span
                  id={`disp${page}`}
                  className="ms-3 fw-bold"
                >
                  {feedback[`disp${page}`]}
                </span>
              </div>
            </div>
          )}
        </div>

       

        
      </div>
      
       

        <div className="mt-4">
          <Pagination onPageChange={handlePageChange} total={10} />
        </div>
    </>
  );
};
