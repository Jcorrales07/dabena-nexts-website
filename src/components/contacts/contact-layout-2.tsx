"use client"

import React from 'react';

import {z} from "zod";

const formSchema = z.object({
    nombre: z.string().min(3, {
        message: "El nombre debería llevar mas de 3 carácteres"
    }),
    apellido: z.string().min(3, {
        message: "El apellido debería llevar mas de 3 carácteres"
    }),
    correo: z.string().email({
        message: "El correo no es valido, reviselo!"
    }),
    numero: z.string()
        .max(9, {message: "El número telefónico debe tener un mínimo de 9 dígitos incluyendo el espacio"})
        .min(7, {message: "El número telefónico debe tener un mínimo de 8 dígitos"})
        .regex(/^(\d{8}|\d{4} \d{4})$/, {
            message: "El número telefónico debe ser XXXXXXXX o XXXX XXXX",
        }),
    genero: z.enum(["masculino", "femenino"]),
    cumple: z.date().min(new Date("1900-01-01"), { message: "Seguro? 🤔"}).max(new Date(), { message: "No naciste hoy!"}),
    identidad: z.string().regex(/^\d{4} \d{4} \d{5}$/),
    domicilio: z.string().min(10),
    comentario: z.string().optional(),
});

// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Button, Input, RadioGroup, Radio, Textarea} from "@nextui-org/react";


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
        <section id="aplicacion"
                 className="w-full flex flex-col items-center justify-center lg:px-[64px] lg:py-[112px] px-[20px] py-[64px] gap-[48px] lg:gap-[80px]">

            <section className="flex flex-col max-w-[768px] gap-12">
                <section className="flex flex-col gap-6">
                    <h2 className="font-bold text-4xl lg:text-5xl">Aplicacion para mayorista</h2>
                    <p className="font-bold text-base lg:text-lg ">Rellene el formulario</p>
                </section>


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

                            <FormField name="apellido" control={form.control} render={({field}) => (
                                <FormItem className={"flex-1"}>
                                    <FormLabel>Apellido</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Ferrari"
                                               radius="sm" {...form.register("apellido")} />
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

                            <FormField name="numero" control={form.control} render={({field}) => (
                                <FormItem className={"flex-1"}>
                                    <FormLabel>Numero de teléfono</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="xxxx xxxx"
                                               radius="sm" {...form.register("numero")} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>
                            </FormField>
                        </div>

                        <div>
                            <FormField name="genero" control={form.control} render={({field}) => (
                                <FormItem className={"flex-1"}>
                                    <FormLabel>Genero</FormLabel>
                                    <FormControl>
                                        <RadioGroup orientation="horizontal" {...form.register("genero")}>
                                            <Radio value="masculino">Masculino</Radio>
                                            <Radio value="femenino">Femenino</Radio>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>
                            </FormField>
                        </div>

                        <div className="flex max-sm:flex-col gap-6">
                            <FormField name="cumple" control={form.control} render={({field}) => (
                                <FormItem className={"flex-1"}>
                                    <FormLabel>Fecha de nacimiento</FormLabel>
                                    <FormControl>
                                        <Input type="date" radius="sm" {...form.register("cumple")} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>
                            </FormField>

                            <FormField name="identidad" control={form.control} render={({field}) => (
                                <FormItem className={"flex-1"}>
                                    <FormLabel>Numero de identidad</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="xxxx xxxx xxxxx"
                                               radius="sm" {...form.register("identidad")} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>
                            </FormField>
                        </div>

                        <div>
                            <FormField name="domicilio" control={form.control} render={({field}) => (
                                <FormItem className={"flex-1"}>
                                    <FormLabel>Dirección de domicilio</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Barrio Medina, 12 calle 3 y 4 Avenida..."
                                               radius="sm" {...form.register("domicilio")} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>
                            </FormField>
                        </div>

                        <div>
                            <FormField name="comentario" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormLabel>Algo que nos quieras comentar?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            radius="sm"
                                            size={"lg"}
                                            fullWidth={false}
                                            placeholder="Escriba su mensaje..."
                                            className="w-full"
                                            {...form.register("comentario")}
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