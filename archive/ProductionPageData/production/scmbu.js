import Navigation from '../../../src/components/Navigation/Navigation';
import data from '../../src/components/Production/ProductionPageData/scmbu';
import ProductionData from '../../../src/components/Production/ProductionData';

export default function SCMBU() {
  return (
    <>
      <Navigation show={true} />
      <ProductionData data={data} />
    </>
  );
}
