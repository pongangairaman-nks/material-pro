import React, { useState } from 'react';
import { Map, GeoJsonLoader } from 'pigeon-maps';
import { Marker, Overlay } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';
import { useEffect } from 'react';
import swalMessage from '@sweetalert/with-react';
import swal from 'sweetalert';
import { Row, Card, Col, Button, Modal, Container, Carousel, Badge, Table } from 'react-bootstrap';
// import './Map.css';

const geoJsonLink = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [20.85232003636196, -34.395072792928964],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [19.837717748923467, -30.393366926120116],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [20.84366722317924, -34.394417466388894],
        type: 'Point',
      },
    },
  ],
};

function MapApp() {
  const [hue, setHue] = useState(0);
  const color = 'blue';
  //   const [showhover, setshowhover] = useState(false);
  //   const [showhover2, setshowhover2] = useState(false);
  //   const [showhover3, setshowhover3] = useState(false);
  //   const [windowSize, setWindowSize] = useState(getWindowSize());
  //   const [defaultzoom, setdefaultzoom] = useState(getzoom());

  //   useEffect(() => {
  //     function handleWindowResize() {
  //       setWindowSize(getWindowSize());
  //     }
  //     window.addEventListener('resize', handleWindowResize);
  //     if (windowSize.innerWidth > 1600) {
  //       setdefaultzoom(15.7);
  //     } else if (windowSize.innerWidth > 1400 && windowSize.innerWidth < 1600) {
  //       setdefaultzoom(15.7);
  //     } else if (windowSize.innerWidth > 1200 && windowSize.innerWidth < 1400) {
  //       setdefaultzoom(15.7);
  //     } else if (windowSize.innerWidth > 1000 && windowSize.innerWidth < 1200) {
  //       setdefaultzoom(15.3);
  //     } else if (windowSize.innerWidth > 800 && windowSize.innerWidth < 1000) {
  //       setdefaultzoom(15);
  //     } else if (windowSize.innerWidth > 600 && windowSize.innerWidth < 800) {
  //       setdefaultzoom(14.8);
  //     } else if (windowSize.innerWidth > 400 && windowSize.innerWidth < 600) {
  //       setdefaultzoom(14.5);
  //     } else if (windowSize.innerWidth > 200 && windowSize.innerWidth < 400) {
  //       setdefaultzoom(14);
  //     }
  //     return () => {
  //       window.removeEventListener('resize', handleWindowResize);
  //     };
  //   }, [windowSize]);

  //   function getWindowSize() {
  //     const { innerWidth, innerHeight } = window;
  //     return { innerWidth, innerHeight };
  //   }

  //   function getzoom() {
  //     var zoom = 15.7;
  //     if (windowSize.innerWidth > 1600) {
  //       zoom = 15.7;
  //     } else if (windowSize.innerWidth > 1400 && windowSize.innerWidth < 1600) {
  //       zoom = 15.7;
  //     } else if (windowSize.innerWidth > 1200 && windowSize.innerWidth < 1400) {
  //       zoom = 15.7;
  //     } else if (windowSize.innerWidth > 1000 && windowSize.innerWidth < 1200) {
  //       zoom = 15.3;
  //     } else if (windowSize.innerWidth > 800 && windowSize.innerWidth < 1000) {
  //       zoom = 15;
  //     } else if (windowSize.innerWidth > 600 && windowSize.innerWidth < 800) {
  //       zoom = 14.8;
  //     } else if (windowSize.innerWidth > 400 && windowSize.innerWidth < 600) {
  //       zoom = 14.5;
  //     } else if (windowSize.innerWidth > 200 && windowSize.innerWidth < 400) {
  //       zoom = 14;
  //     }
  //     return zoom;
  //   }

  return (
    <Map provider={osm} height={450} defaultCenter={[32.19945, -86.41766]} defaultZoom={12}>
      <GeoJsonLoader
        link={geoJsonLink}
        styleCallback={(feature, hover) =>
          hover ? { fill: '#93c0d099', strokeWidth: '2' } : { fill: '#d4e6ec99', strokeWidth: '1' }
        }
      />
      <Marker
        width={50}
        anchor={[32.19945, -86.4178]}
        color={color}
        onClick={() => {
          setHue(hue + 20);
          //   setshowhover(true);
        }}
        // onMouseOver={() => setshowhover(true)}
        // onMouseOut={() => setshowhover(false)}
      />
      <Marker
        width={50}
        anchor={[32.16, -86.35]}
        color={color}
        onClick={() => {
          setHue(hue + 20);
          //   setshowhover(true);
        }}
        // onMouseOver={() => setshowhover(true)}
        // onMouseOut={() => setshowhover(false)}
      />
      <Marker
        width={50}
        anchor={[32.22, -86.6]}
        color={color}
        onClick={() => {
          setHue(hue + 20);
          //   setshowhover(true);
        }}
        // onMouseOver={() => setshowhover(true)}
        // onMouseOut={() => setshowhover(false)}
      />
      <Marker
        width={50}
        anchor={[32.2, -86.4178]}
        color={color}
        onClick={() => {
          setHue(hue + 20);
          //   setshowhover2(true);
        }}
        // onMouseOver={() => setshowhover2(true)}
        // onMouseOut={() => setshowhover2(false)}
      />
      <Marker
        width={50}
        anchor={[32.195, -86.48]}
        color={color}
        onClick={() => {
          setHue(hue + 20);
          //   setshowhover3(true);
        }}
        // onMouseOver={() => setshowhover3(true)}
        // onMouseOut={() => setshowhover3(false)}
      />
    </Map>
  );
}
export default MapApp;
