import React, { useEffect } from "react"

function OnlineBooking() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('message', function handleIFrameMessage(e) {
                var clinikoBookings = document.getElementById('cliniko-91023304');
                if (typeof e.data !== 'string') return;
                if (e.data.search('cliniko-bookings-resize') > -1) {
                    var height = Number(e.data.split(':')[1]);
                    clinikoBookings.style.height = height + 'px';
                }
                e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
            });
        }
    })

    return (
        <section style={{width: 'min(90%, 1000px)', margin: '0 auto', padding: '50px 0', textAlign: 'center'}}>
            <h2>Book online</h2>
            <p style={{width: 'min(100%, 800px)', margin: 'auto auto 20px auto'}}>To make a booking online, choose the appointment type, who you'd like your appointment with, then pick an available date to make a booking.</p>
            <iframe id='cliniko-91023304' src='https://kibworth-osteopaths.uk1.cliniko.com/bookings?business_id=331656748404315481&embedded=true' frameborder='0' scrolling='auto' style={{pointerEvents: 'auto', display: 'block', width: '100%'}}></iframe>
        </section>
    )
}

export default OnlineBooking