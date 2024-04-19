"use client"

import React from 'react';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Button, Input, Textarea} from "@nextui-org/react";
import {IoMail} from "react-icons/io5";
import {BsFillTelephoneInboundFill} from "react-icons/bs";
import {FaLocationDot} from "react-icons/fa6";

const formSchema = z.object({
    nombre: z.string().min(3, {
        message: "El nombre debería llevar mas de 3 carácteres"
    }),
    correo: z.string().email({
        message: "El correo no es valido, reviselo!"
    }),
    mensaje: z.string().min(10, {
        message: "Escriba un texto completo por favor!"
    }),
});

function ContactLayout2() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <section id="contacto"
                 className="w-full flex flex-col lg:flex-row lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex flex-col gap-8">
                <section className="flex flex-col gap-3 lg:gap-4">
                    <p className="text-base font-semibold">Información</p>
                    <h2 className="text-4xl lg:text-5xl font-bold">Contáctenos</h2>
                    <p className="text-lg">Complete el formulario a continuación para obtener más información o realizar
                        consultas específicas.</p>
                </section>

                <section className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <IoMail size={20}/>
                        <div>
                            <p className="text-base lg:text-lg">formex.dabena@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <BsFillTelephoneInboundFill size={20}/>
                        <div>
                            <p className="text-base lg:text-lg">+504 9979 - 5366</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <FaLocationDot size={20} className="max-sm:w-12"/>
                        <div>
                            <p className="lg:w-[300px] text-wrap text-base lg:text-lg leading-8">Barrio Medina. 12
                                Calle, 3 y 4
                                Avenida. Enfrente a la
                                Segunda Iglesia Evalengica y
                                Reformada.</p>
                        </div>
                    </div>
                </section>
            </section>


            <section className="w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                          className="flex flex-1 flex-col gap-6">
                        <div className="flex gap-6">
                            <FormField name="nombre" control={form.control} render={({field}) => (
                                <FormItem className={"flex-1"}>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enzo"
                                               radius="sm" {...form.register("nombre")} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>
                            </FormField>
                        </div>

                        <div className="flex max-sm:flex-col gap-6">
                            <FormField name="correo" control={form.control} render={({field}) => (
                                <FormItem className={"flex-1"}>
                                    <FormLabel>Correo electrónico</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="micorreo@gmail.com"
                                               radius="sm" {...form.register("correo")} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>
                            </FormField>
                        </div>

                        <div>
                            <FormField name="mensaje" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormLabel>Algo que nos quieras comentar?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            radius="sm"
                                            size={"lg"}
                                            fullWidth={false}
                                            placeholder="Escriba su mensaje..."
                                            className="w-full"
                                            {...form.register("mensaje")}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>
                            </FormField>
                        </div>

                        <Button type="submit" radius="sm">Enviar</Button>
                    </form>
                </Form>
            </section>
        </section>

    );
}

export default ContactLayout2;