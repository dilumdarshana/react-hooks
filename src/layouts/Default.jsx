import { Outlet } from 'react-router-dom';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import ErrorBoundary from '../components/errorBoundary';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  )
}

export default DefaultLayout;
