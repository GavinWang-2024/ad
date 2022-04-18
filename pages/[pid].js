import path from 'path';
import fs from 'fs/promises';
import Navigation from '../src/components/Navigation/Navigation';
import ProductionData from '../src/components/Production/ProductionData';

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  return (
    <>
      <Navigation show={true} />
      <ProductionData data={loadedProduct} />
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'product-details.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'scmbu' } },
      { params: { pid: 'sc144' } },
      { params: { pid: 'sc200' } },
      { params: { pid: 'sc250' } },
      { params: { pid: 'svs' } },
      { params: { pid: 'bkf' } },
      { params: { pid: 'ku02m' } },
      { params: { pid: 'kupnsh' } },
      { params: { pid: 'umosh' } },
    ],
    fallback: false,
  };
}

export default ProductDetailPage;
