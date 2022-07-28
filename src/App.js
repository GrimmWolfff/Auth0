import { lazy, Suspense } from 'react';

export default function App (){
  const Main = lazy(() => import('./auth/main'));
  return (
    <div className='container'>
      <canvas className='canvas'></canvas>
      
      <Suspense fallback={<>loading...</>}>
        <Main />
      </Suspense>
    </div>
  );
}