import { Component } from 'react';
// import { Profile } from './Profile/Profile';
// import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './FriendList/FriendList';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
import TodoList from './TodoList';

// import user from './dataBase/user.json';
// import data from './dataBase/data.json';
// import friends from './dataBase/friends.json';
// import transactions from './dataBase/transactions.json';
import initialTodo from './dataBase/todos.json';

export class App extends Component {
  state = {
    todos: initialTodo,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          color: '#010101',
        }}
      >
        <p>Todos quantity: {todos.length}</p>
        <p>Todos finished: {completedTodos}</p>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        {/* <Counter initialValue={0} /> */}
        {/* {<Dropdown />} */}
        {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
      </div>
    );
  }
}
