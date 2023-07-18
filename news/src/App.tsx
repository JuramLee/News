import 'tailwindcss/tailwind.css';
import DetailInfo from './Pages/Detail/Components/info';
import Comments from './Pages/Detail/Components/comments';
import Detail from './Pages/Detail/detail';

function App() {
  return (
    <>
      {/* <div className='w-full bg-slate-50 flex flex-col justify-center items-center'>
        <div className='w-10/12 max-w-screen-xl border border-gray-700 p-20'></div>
        <DetailInfo />
      </div>
      <Comments /> */}
      <Detail />
    </>
  );
}

export default App;
