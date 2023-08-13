import logo from './logo.svg';
import Header from './componets/common/Header';
import Content from './componets/common/Content';
import List from './componets/starwars/List';
import Posts from './componets/rails/Posts';
import Button from './Button';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Content />
        <Button color="red" msg="ログイン" width="500px" />
        <Button color="blue" msg="会員登録" width="" />
        <input type="text" />
        <div className="post">
          <List />
          <Posts />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
