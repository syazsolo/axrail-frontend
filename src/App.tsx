import CoHost from '@/components/sections/CoHost';
// Section components
import CouldMake from '@/components/sections/CouldMake';
import EasyToList from '@/components/sections/EasyToList';
import Footer from '@/components/layout/Footer';
import MicroFooter from '@/components/sections/MicroFooter';
// Layout components
import Navbar from '@/components/layout/Navbar';
import NotJustHomeowners from '@/components/sections/NotJustHomeowners';
import QnA from '@/components/sections/QnA';
import Tools from '@/components/sections/Tools';
import YoureProtected from '@/components/sections/YoureProtected';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
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
