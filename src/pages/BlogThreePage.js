import Footer from 'components/common/Footer';
import Responsive from 'components/common/Responsive';
import Introline from 'components/common/Introline';
import detail from '../static/data/detailData.json';
import ScrollToTop from 'components/common/ScrollToTop';
import DetailPanel from 'components/contentPanel/DetailPanel';
import { Helmet } from 'react-helmet-async';
import React from 'react';

const PetmilyPage = () => {
  return (
    <>
      <Helmet>
        <title>기우제는 실패하지 않는다 - BlogThree</title>
      </Helmet>
      <ScrollToTop />
      <Introline />
      <Responsive>
        <DetailPanel data={detail[0]} />
      </Responsive>
      <Footer />
    </>
  );
};

export default PetmilyPage;
