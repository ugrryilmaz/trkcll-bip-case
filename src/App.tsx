import ProductListPage from '@/pages/product/ProductListPage';
import Layout from '@/layout/Layout';

const App = () => {
  return (
    <Layout>
      {/*
       * projede bir routing ihtiyacı olmasa da page tanımı üzerinden gitmek istedim
       */}
      <ProductListPage />
    </Layout>
  );
};

export default App;
