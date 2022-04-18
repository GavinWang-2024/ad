import Navigation from '../../src/components/Navigation/Navigation';
import data from '../../src/components/Production/ProductionPageData/sck250';
import ProductionData from '../../src/components/Production/ProductionData';

export default function SCK250() {
  return (
    <>
      <Navigation show={true} />
      <ProductionData data={data} />
    </>
  );
}
