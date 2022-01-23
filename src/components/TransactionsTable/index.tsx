import React, { useContext } from 'react'
import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';

export function TransactionTable() {
  const transactions = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.amount}
              </td>
              <td>{transaction.category}</td>
              <td>
                {transaction.createdAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
