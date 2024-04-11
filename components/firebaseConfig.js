import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, Polyline } from '@react-google-maps/api';
import firebase from 'firebase/app';
import 'firebase/database';

const RealTimeTracker = () => {
  const [lat, setLat] = useState(37.7850);
  const [lng, setLng] = useState(-122.4383);
  const [lineCoords, setLineCoords] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyCz7V5B1G4ZLflFlhjpxepPX1j7p-Rs1ZI',
      authDomain: 'gsp-tracker-ca6e5.firebaseapp.com',
      databaseURL: 'https://gsp-tracker-ca6e5-default-rtdb.firebaseio.com',
      projectId: 'gsp-tracker-ca6e5',
      storageBucket: 'gsp-tracker-ca6e5.appspot.com',
      messagingSenderId: '204637618654',
      appId: '1:204637618654:web:33f3d989739de752e81d4f'
    };

    firebase.initializeApp(firebaseConfig);


    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const gps = snapshot.val();
      setLat(gps.LAT);
      setLng(gps.LNG);
      setLineCoords((prevCoords) => [...prevCoords, { lat: gps.LAT, lng: gps.LNG }]);
    });

    return () => {
      dbRef.off(); // Cleanup Firebase listener on component unmount
    };
  }, []);

  const mapStyles = { height: '400px', width: '100%' };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={{ lat, lng }}
        zoom={12}
      >
        <Marker position={{ lat, lng }} />
        <Polyline path={lineCoords} options={{ strokeColor: '#2E10FF' }} />
      </GoogleMap>

      {/* <div>
        {lat} {lng}
      </div> */}
    </div>
  );
};

export default RealTimeTracker;
