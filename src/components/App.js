import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const[questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(questions => setQuestions(questions))
  }, [])

  function handleAddQuestion(newQ) {
    setQuestions([...questions, newQ])
  }

  function handleDeleteQuestion(deletedQ) {
    const updatedQuestions = questions.filter(q => q.id !== deletedQ.id)
    setQuestions(updatedQuestions)
  }

  function handleUpdatedQuestion(updatedQ) {
    const updatedQuestions = questions.map(q => {
      if (q.id === updatedQ.id) {
        return updatedQ
      } else return q
    })
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm onAddQuestion={handleAddQuestion} /> 
        : <QuestionList 
            questions={questions} 
            onDeleteQuestion={handleDeleteQuestion} 
            onUpdateQ={handleUpdatedQuestion}/>}
    </main>
  );
}

export default App;
