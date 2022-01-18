import Modal from 'react-modal'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'

import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Titulo" />
        <input
          type="number"
          placeholder="Valor"
        />
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
          >
            <img src={IncomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
          >
            <img src={OutcomeImg} alt="Entrada" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="number"
          placeholder="Categoria"
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
