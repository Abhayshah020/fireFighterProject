import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useDispatch, useSelector } from "react-redux"
import { setFireFighterLocationLatLng, setLocalAddressNameAfterRevGeoCode } from "../../redux/reducers/locationSlice"
import L, { map } from 'leaflet';
import { notification } from 'antd';
import axios from "axios";
const allUserLocationMarker = L.icon({
  iconSize: [25, 40],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});
const dragSenderMarker = L.icon({
  iconSize: [33, 43],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1180/1180058.png?w=740&t=st=1675612962~exp=1675613562~hmac=72aeaef81f5c310472a9da30bdcdfee7807d60f8593016c05f9460f1037eae64",
});

const center = {
  lat: 27.68564550564005,
  lng: 85.3445145828365,
}

const Map = (props) => {
  const [locationAddressName, setLocationAddressName] = useState('')
  const [revGeoCodeAddressName, setRevGeoCodeAddressName] = useState([])
  const { fireFighterLocationLatLng, localAddressNameAfterRevGeoCode } = useSelector(state => state.location)
  const dispatch = useDispatch()
  const { lat, lng } = fireFighterLocationLatLng

  const fetchAvailableItems = async(page, size) => {
    await axios.get(`${process.env.REACT_APP_API_URL}/addressList`).then((response) => {
      setRevGeoCodeAddressName(response.data.addressList)
      // console.log(response.data.addressList.addressLatLong)
    });
  }

  useEffect(() => {
    fetchAvailableItems()
  }, [])

  const geoCodeLatLng = (lat, lng) => {
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=a1dd45a7dfc54f55a44b69d125722fcb`)
      .then((res) => res.json())
      .then((data) => setLocationAddressName(data.features[0].properties.formatted))
  }

  useEffect(() => {
    dispatch(setLocalAddressNameAfterRevGeoCode(locationAddressName))
  }, [locationAddressName])

  const DraggableMarker = () => {
    const [draggable, setDraggable] = useState(true)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      (e) => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            const latLngObj = {
              lat: marker.getLatLng().lat,
              lng: marker.getLatLng().lng
            }
            dispatch(setFireFighterLocationLatLng(latLngObj))
            geoCodeLatLng(marker.getLatLng().lat, marker.getLatLng().lng)
            if (props.isRegister) {
              notification.destroy();
              notification.success({ message: "You Have Chosen Your Adress!", duration: 2 });
            }
          }
        },
      }),
      [],
    )
    useCallback(() => {
      setDraggable((d) => !d)
    }, [])

    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={fireFighterLocationLatLng.lat ? fireFighterLocationLatLng : center}
        icon={dragSenderMarker}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span >
            This marker is draggable
          </span>
        </Popup>
      </Marker>
    )
  }

  const MarkerAllAddressShow = (props) => {
    const markerRef = useRef(null)
    return (
      <Marker
        draggable={false}
        position={props.item ? props.item : center}
        icon={allUserLocationMarker}
        ref={markerRef}>
        <Popup minWidth={90}>
          <span >
            {props.name}<br/>
            {props.address}
          </span>
        </Popup>
      </Marker>
    )
  }

  return (
    <>
      <MapContainer center={lat ? [lat, lng] : [27.68564550564005, 85.3445145828365]} zoom={props.isRegister ? '8' : '13'} minZoom={props.isRegister ? 2 : 4} scrollWheelZoom={false}
        style={{ height: props.isRegister ? "20vw" : '40vw', width: props.isRegister ? '45vw' : '100vw' }} attributionControl={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.isRegister?<DraggableMarker />:''}

        {!props.isRegister?revGeoCodeAddressName.map((item) => {
          return <MarkerAllAddressShow item={item.addressLatLong} name={item.name} address={item.address}/>
        }):''}
      </MapContainer>

    </>
  )
}
export default Map