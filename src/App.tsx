// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section components
import CouldMake from './components/sections/CouldMake/CouldMake';
import EasyToList from './components/sections/EasyToList/EasyToList';
import CoHost from './components/sections/CoHost/CoHost';
import YoureProtected from './components/sections/YoureProtected/YoureProtected';
import Tools from './components/sections/Tools/Tools';
import NotJustHomeowners from './components/sections/NotJustHomeowners/NotJustHomeowners';
import QnA from './components/sections/QnA/QnA';
import MicroFooter from './components/sections/MicroFooter/MicroFooter';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <CouldMake />
        <EasyToList />
        <CoHost />
        <YoureProtected />
        <Tools />
        <NotJustHomeowners />
        <QnA />
        <MicroFooter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
