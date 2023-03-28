import Header from '../components/Header';
import TodosLogic from '../components/TodosLogic';

function Home() {
  return (
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
  );
}

export default Home;
