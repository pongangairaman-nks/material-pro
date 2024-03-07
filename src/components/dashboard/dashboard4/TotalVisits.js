import React from 'react';
import { VectorMap } from 'react-jvectormap';
import DashCard from '../dashboardCards/DashCard';
import '../../../views/maps/VectorMap.css';
import MapApp from './Map';

const mapData = {
  FR: 540,
  AU: 360,
  GB: 690,
  GE: 200,
  IN: 400,
  RO: 600,
  RU: 300,
  US: 2920,
};

const TotalVisits = () => {
  return (
    <DashCard>
      <div className="text-center">
        {/* <VectorMap
          map="world_mill"
          backgroundColor="transparent"
          zoomOnScroll={false}
          containerStyle={{
            width: '100%',
            height: '375px',
          }}
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: '#d5e4e4',
              'fill-opacity': 0.9,
              stroke: '1',
              'stroke-width': 1,
              'stroke-opacity': 0.5,
            },
          }}
          series={{
            regions: [
              {
                values: mapData,
                scale: ['#1e88e5'],
              },
            ],
          }}
        /> */}
        <MapApp />
      </div>
      <div className="hstack gap-5 justify-content-start pb-1 mt-3">
        <div className="d-flex align-items-center text-success fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Running
        </div>
        <div className="d-flex align-items-center text-primary fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Moving
        </div>
        <div className="d-flex align-items-center text-warning fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Stopped
        </div>
        <div className="d-flex align-items-center text-danger fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Not Connected
        </div>
      </div>
    </DashCard>
  );
};

export default TotalVisits;
