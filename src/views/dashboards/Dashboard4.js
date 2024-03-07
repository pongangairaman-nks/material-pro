import { Row, Col } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

import ProgressCards from '../../components/dashboard/dashboard3/ProgressCards';
import TotalVisits from '../../components/dashboard/dashboard4/TotalVisits';

const Dashboard3 = () => {
  return (
    <>
      <Row>
        <Col lg="3">
          <BreadCrumbs />
        </Col>
        <Col lg="9">
          <ProgressCards />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <TotalVisits />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard3;
