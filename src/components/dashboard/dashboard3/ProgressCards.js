import React from 'react';
import { Row } from 'reactstrap';

import ProgressCardsData from './ProgressCardsData';

const ProgressCards = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Reviews                                                 */
    /*--------------------------------------------------------------------------------*/
    <Row>
      <ProgressCardsData
        // title= "Daily Sales"
        pColor="success"
        subtext="All Assets"
        value="100"
      />
      <ProgressCardsData
        // title= "Weekly Sales"
        pColor="primary"
        subtext="Running Assets"
        value="50"
      />
      <ProgressCardsData
        // title= "Monthly Sales"
        pColor="warning"
        subtext="Stopped Assets"
        value="35"
      />
      <ProgressCardsData
        // title= "Yearly Sales"
        pColor="danger"
        subtext="Assets Not Connected"
        value="15"
      />
    </Row>
  );
};

export default ProgressCards;
