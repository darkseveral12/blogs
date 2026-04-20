import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TrendList from "./components/TrendList";
import TopicsList from "./components/TopicsList";
function App() {
  return (
    <div>
      <Navigation />
      <div className="flex justify-center">
        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendList />
          <TopicsList />
        </div>
      </div>
    </div>
  );
}

export default App;
