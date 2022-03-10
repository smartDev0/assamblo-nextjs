import React from 'react';
import { isBrowser, isTablet } from 'react-device-detect';
import { Gmaps, Marker } from 'react-gmaps';
import { translate } from 'react-translate';
import { TranslationKeysEnum } from '../data/translations/enums';

const markers = [
  {
    coords: {
      lat: -34.7593576,
      lng: -58.3992827,
    },
    label: {
      key: TranslationKeysEnum.Map.BUENOS_AIRES_OFFICE_LABEL,
    },
    className: 'map__marker--right',
    icon: {
      url: '/img/icons/location.svg',
      anchor: { x: 30, y: 30 },
    },
    url:
      'https://www.google.com/maps/place/Leandro+N.+Alem+117,+B1832BOC+Lomas+de+Zamora,+Provincia+de+Buenos+Aires/@-34.7593576,-58.4014714,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcd294627aa4ed:0x4d80890730be7b96!8m2!3d-34.7593576!4d-58.3992827',
  },
  {
    coords: {
      lat: 25.7671042,
      lng: -80.1958445,
    },
    label: {
      key: TranslationKeysEnum.Map.MIAMI_OFFICE_LABEL,
    },
    className: 'map__marker--right',
    icon: {
      url: '/img/icons/location.svg',
      anchor: { x: 30, y: 30 },
    },
    url:
      'https://www.google.com/maps/place/WeWork+Coworking+%26+Office+Space/@25.7671042,-80.1958445,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b684eeadddcf:0x644286c815ea95c5!8m2!3d25.7671042!4d-80.1936558',
  },
  {
    coords: {
      lat: 41.406933,
      lng: 2.1545198,
    },
    className: 'map__marker--left',
    label: {
      key: TranslationKeysEnum.Map.BARCELONA_OFFICE_LABEL,
    },
    icon: {
      url: '/img/icons/location.svg',
      anchor: { x: 30, y: 30 },
    },
    url:
      'https://www.google.com/maps/place/Carrer+de+Vilafranca,+7,+08024+Barcelona,+Spain/@41.406933,2.1545198,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a2bb6eda86e3:0xe6078ce47e4225a5!8m2!3d41.406933!4d2.1567085',
  },
];

const params = { v: '3.exp', key: 'AIzaSyAbwRDoUaQTr3YRjI3FsSzPXqdjFgUJpyk' };

const Map = ({ t }) => {
  const getLngOffset = () => {
    if (isBrowser) {
      return 90;
    }
    if (isTablet) {
      return 120;
    }
    return 10;
  };
  const lngOffset = getLngOffset();

  const handleMapCreated = map => {
    const noTextStyle = [
      {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'water',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }],
      },
    ];
    map.mapTypes.set(
      'mystyle',
      // eslint-disable-next-line no-undef
      new google.maps.StyledMapType(noTextStyle, { name: 'No text style' })
    );
  };

  return (
    <div className="map">
      <Gmaps
        width="100%"
        height="100%"
        lat={30}
        lng={-20 - lngOffset}
        zoom={2}
        params={params}
        mapTypeControlOptions={{
          mapTypeIds: ['mystyle'],
        }}
        mapTypeId="mystyle"
        onMapCreated={handleMapCreated}
      >
        {markers.map(marker => (
          <Marker
            key={marker.url}
            lat={marker.coords.lat}
            lng={marker.coords.lng}
            icon={marker.icon}
            icon={{
              url: '/img/icons/location.svg',
              anchor: { x: 30, y: 30 },
            }}
            label={{
              className: marker.className,
              color: '#005b96',
              fontWeight: 'bold',
              fontSize: '16px',
              text: t(marker.label.key),
            }}
            onClick={() => window.open(marker.url, '__blank')}
          />
        ))}
      </Gmaps>
    </div>
  );
};
export default translate(TranslationKeysEnum.Map.NAME)(Map);
