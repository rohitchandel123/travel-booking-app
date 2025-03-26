import { AppLayoutProps } from '../AppLayout.d';
//import Navbar from './Navbar';
import Footer from '../../../Components/Footer/index';
import Header from '../../../Components/Header/index';

function PublicLayout({ children }: AppLayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
       <Footer /> 
    </>
  );
}

export default PublicLayout;
