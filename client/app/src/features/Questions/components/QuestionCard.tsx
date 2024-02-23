/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import type { Question } from '../type';
import { checkAnswerFetch } from '../api';
import '../questionCard.css';
import useButtonDisable from '../ButtonDisable';
import { useDispatch } from 'react-redux';

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
  const [result, setResult] = useState('');
  const [resultButton, setResultButton] = useState(true);

  const { buttonIsDisabled, buttonDisable } = useButtonDisable(question.id)
  const dispatch = useDispatch()

  useEffect(() => {
    const buttonCondition = localStorage.getItem(`${question.id}`)
    if (buttonCondition) {
      buttonDisable()
    }
  }, [])

  const checkAnswer = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    checkAnswerFetch({ answer: answerValue, id: question.id })
      .then(data => {
        dispatch({type: 'score/user', payload: data.score})
        if (data.message === 'confirm') {
          data.result ? (setResult(`Правильно, +${question.price}`), setResultButton(false)) : setResult(`Неправильно, -${question.price}`)
        } else {
          setResult(data.message)
        }
      })
      .catch(console.log);
  };

  function openModal(): void {
    buttonDisable()
    setModalIsOpen(true);
  }

  function closeModal(): void {
    setModalIsOpen(false);
  }

  return (
    <>
      <button type="button" disabled={buttonIsDisabled} onClick={openModal}>{question.price}</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles} contentLabel="Question Modal">
        <button className='modal-window-close-button' type='submit' onClick={closeModal}><p className='hidden-text'>х</p></button>
        <div className='modal-window-image-container'>
          <img className='modal-window-image' src={question.img} alt="question-img" />
        </div>
        <p className='modal-window-question-text'>{question.name}</p>
        <form className='modal-window-form' onSubmit={(e)=>checkAnswer(e)}>
          <input className='modal-window-form-input' onChange={(e) => setAnswerValue(e.target.value)} value={answerValue} placeholder="Введите ответ" required />
          <button className='modal-window-form-button' disabled={!resultButton} type='submit'>Отправить ответ</button>
          <p className='modal-window-result'>{result}</p>
        </form>
      </Modal>
    </>
  )
}

export default QuestionCard