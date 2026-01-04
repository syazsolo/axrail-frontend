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

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <CouldMake />
        <EasyToList />
        <CoHost />
        {/* <YoureProtected /> */}
        {/* <Tools /> */}
        <div className="mx-auto block h-[1px] w-full max-w-5xl bg-gray-200 px-4" />
        <NotJustHomeowners />
        <QnA />
        <MicroFooter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
