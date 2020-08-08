import { Fragment, useState } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import { compose, withProps } from 'recompose';

export const MyMapComponent = compose(
  withProps(props=>({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAkQy1kMhjd_g3kDrGoMSh7VMl4QKkzFQY&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: (
      <div
        style={{
          height: `100%`,
        }}
      />
    ),
    center: { lat: 37.64, lng: -94.95 },
    // { lat: 25.03, lng: 121.6 }
    containerElement: (
      <div
        style={{
          height: props.height,
        }}
      />
    ),
    mapElement: (
      <div
        style={{
          height: `100%`,
        }}
      />
    ),
  })),
  withScriptjs,
  withGoogleMap,
)(props => {
  const [openInfo, setOpenInfo] = useState();
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{
        lat:38.616870,
        lng:-97.765615,
        // lat: 30.1096375,
        // lng: -95.37885260000002,
      }}
    >
      {props.isMarkerShown && (
        <Fragment>
          {props.locations.map((location, i) => {
            return (
              <Marker
                position={{
                  lat: parseFloat(location.latitude),
                  lng: parseFloat(location.longitude),
                }}
                onClick={() => setOpenInfo({ ...props.isOpen, [i]: true })}
              >
                {openInfo && openInfo[i] && (
                  <InfoBox
                    onCloseClick={() => setOpenInfo({ ...props.isOpen, [i]: false })}
                    options={{ closeBoxURL: ``, enableEventPropagation: true }}
                  >
                    <div
                      style={{
                        backgroundColor: `#f9f9ef`,
                        opacity: 0.75,
                        padding: `12px`,
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          fontSize: `16px`,
                          fontColor: `#08233B`,
                          fontWeight: 'bold',
                        }}
                      >
                        {location.company}
                      </div>
                      <span
                        style={{
                          position: 'absolute',
                          right: '0',
                          top: '0',
                          fontSize: '20px',
                          marginRight: '0.3em',
                          cursor:'pointer'
                        }}
                        onClick={() => setOpenInfo({ ...props.isOpen, [i]: false })}
                      >
                        &times;
                      </span>
                      <p>{location.address1}</p>
                    </div>
                  </InfoBox>
                )}
              </Marker>
            );
          })}
        </Fragment>
      )}
    </GoogleMap>
  );
});
