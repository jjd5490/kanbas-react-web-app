import ModuleList from "../Modules/ModuleList";
import TopMenuButtons from "../Modules/TopButtonMenu";
import RightSidebar from "./RightSidebar";

function Home() {
    return (
      <div className="kb-flex-container">
        <div className="kb-flex-column-grow">
          <TopMenuButtons/>
          <ModuleList />
        </div>
        <div>
          <RightSidebar/>
        </div>
      </div>
    );
  }
  export default Home;