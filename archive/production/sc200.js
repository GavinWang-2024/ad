import Navigation from '../../src/components/Navigation/Navigation';
import data from '../../src/components/Production/ProductionPageData/sc200';
import ProductionData from '../../src/components/Production/ProductionData';

export default function SC200() {
  return (
    <>
      <Navigation show={true} />
      <ProductionData data={data} />
    </>
  );
}
