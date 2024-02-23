/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import Modal from 'react-modal';
import type { Question } from '../type';
import { checkAnswerFetch } from '../api';
import '../questionCard.css';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1rem'
  },
};

Modal.setAppElement('#root')

function QuestionCard({ question }: { question: Question }): JSX.Element {
  const [answerValue, setAnswerValue] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const checkAnswer = (): void => {
    checkAnswerFetch({ answer: answerValue, id: question.id })
      .then(data => console.log(data.message))
      .catch(console.log);
  };

  function openModal(): void {
    setModalIsOpen(true);
  }

  function closeModal(): void {
    setModalIsOpen(false);
  }

  return (
    <>
      <button type="button" onClick={openModal}>{question.price}</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles} contentLabel="Question Modal">
        <button className='modal-window-close-button' type='submit' onClick={closeModal}><p className='hidden-text'>х</p></button>
        <div className='modal-window-image-container'>
          <img className='modal-window-image' src={question.img} alt="question-img" />
        </div>
        <p className='modal-window-question-text'>{question.name}</p>
        <form className='modal-window-form' onSubmit={checkAnswer}>
          <input className='modal-window-form-input' onChange={(e) => setAnswerValue(e.target.value)} value={answerValue} placeholder="Введите ответ" required />
          <button className='modal-window-form-button' type='submit'>Отправить ответ</button>
        </form>
      </Modal>
    </>
  )
}

export default QuestionCard