import React from "react";
import QuestionItem from './QuestionItem'

function QuestionList({ questions, onDeleteQuestion, onUpdateQ }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(q => {
          return <QuestionItem 
          key={q.id} 
          question={q} 
          onDeleteQuestion={onDeleteQuestion}
          onUpdateQ={onUpdateQ} />
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
