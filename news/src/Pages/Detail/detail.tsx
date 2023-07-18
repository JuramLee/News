import DetailInfo from './Components/info';
import Comments from './Components/comments';

const Detail = () => {
  return (
    <div className='flex w-10/12 max-w-screen-xl'>
      <div className='w-40 h-full border border-slate-800'>SIDEBAR 임시</div>
      <div className='w-10/12'>
        <DetailInfo />
        <div className='p-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quam
          voluptatibus consequuntur, expedita exercitationem itaque alias hic!
          Doloremque, dolore quisquam, reiciendis modi suscipit cum tempora
          voluptas autem itaque harum deserunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quaerat quam voluptatibus consequuntur,
          expedita exercitationem itaque alias hic! Doloremque, dolore quisquam,
          reiciendis modi suscipit cum tempora voluptas autem itaque harum
          deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat quam voluptatibus consequuntur, expedita exercitationem itaque
          alias hic! Doloremque, dolore quisquam, reiciendis modi suscipit cum
          tempora voluptas autem itaque harum deserunt. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quaerat quam voluptatibus
          consequuntur, expedita exercitationem itaque alias hic! Doloremque,
          dolore quisquam, reiciendis modi suscipit cum tempora voluptas autem
          itaque harum deserunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quaerat quam voluptatibus consequuntur, expedita
          exercitationem itaque alias hic! Doloremque, dolore quisquam,
          reiciendis modi suscipit cum tempora voluptas autem itaque harum
          deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat quam voluptatibus consequuntur, expedita exercitationem itaque
          alias hic! Doloremque, dolore quisquam, reiciendis modi suscipit cum
          tempora voluptas autem itaque harum deserunt.
        </div>
        <Comments />
      </div>
    </div>
  );
};

export default Detail;
