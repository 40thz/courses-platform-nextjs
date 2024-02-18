import styles from './styles.module.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import location from '@assets/img/location.svg';

export const YandexMap = () => {
  const defaultState = {
    center: [46.96335444841125,142.7374591183852],
    zoom: 19,
  };

  return (
    <YMaps>
      <Map className={styles.map} defaultState={defaultState}>
        <Placemark
          options={{
            iconLayout: 'default#image',
            iconImageHref: location.src,
            iconImageSize: [44,44],
            iconImageOffset: [-20, -40],
          }}
          geometry={[46.96335444841125,142.7374591183852]}
        />
      </Map>
    </YMaps>
  );
};
