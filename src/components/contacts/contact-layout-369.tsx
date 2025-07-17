import React from 'react';

function ContactLayout369() {
    return (
        <section id={"maps"}
                 className="w-full flex flex-col lg:px-16 lg:py-28 px-5 py-16 gap-12 lg:gap-20">

            <section className="flex flex-col gap-3 lg:gap-4">
                <p className="text-base font-semibold">Descubre</p>
                <h2 className="text-4xl lg:text-5xl font-bold">Ubicaciones de mayoristas cerca de ti!</h2>
                <p className="text-base">Encuentra la ubicación de nuestros puntos de venta</p>
            </section>


            <section>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1LFXd0xuycKHMAxOy25obKVFNxfucVZY&ehbc=2E312F&noprof=1" width="100%" height="650"></iframe>
            </section>
        </section>
    );
}

export default ContactLayout369;