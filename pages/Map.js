import Head from 'next/head';
import RealTimeTracker from '../components/firebaseConfig';

const MyPage = () => (
  <>
    <Head>
    {/* <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBIHv7Vci9zEHGqW9g244wdwHUFdvfC2Ds&callback=initialize"></script> */}
    </Head>
    <div>
      <RealTimeTracker />
    </div>
  </>
);

export default MyPage;
