import React from "react"
import { Helmet } from "react-helmet"

if (typeof window !== 'undefined') {
    const location = {lat: 52.586731, lng: -1.022502}
    window.initMap = function() {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 12,
        })

        const marker = new window.google.maps.Marker({position: location, map: map})
        const infoWindow = new window.google.maps.InfoWindow({
            content: `<div style="padding: 0 20px"><h4 style="margin: 5px 0">Kibworth Osteopaths & Pilates</h4><p>Unit 17, The Manor<br>Main Street<br>Tur Langton<br>Leicestershire<br>LE8 0PJ</p></div>`
        })
        
        marker.addListener('click', function() {
            infoWindow.open(map, marker)
        })
    }           
}

export default function Map() {
    return (
        <section style={{padding: 0}}>
            <Helmet>
                <script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3oKr-gZDywgtyt2vpGhrQ3s1HqjcT-M4&callback=initMap"></script>
            </Helmet>
            <div id="map" style={{ height: 350, width: '100%'}}></div>
        </section>
    )
}