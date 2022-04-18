import Navigation from '../../src/components/Navigation/Navigation';
import data from '../../src/components/Production/ProductionPageData/sc144';
import ProductionData from '../../src/components/Production/ProductionData';

export default function SC144() {
  return (
    <>
      <Navigation show={true} />
      <ProductionData data={data} />
    </>
  );
}
