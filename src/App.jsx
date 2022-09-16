import CustomRoutes from './Routes';
import Layout from './components/Layout';

// Vendor Bundle CSS
import './assets/css/vendor.bundle.css';

// Custom styles for this template
import './assets/css/style.css';
import './assets/css/theme.css';

function App() {
  return (
    <>
      <Layout>
        <CustomRoutes />
      </Layout>
    </>
  );
}

export default App;
