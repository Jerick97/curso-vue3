<template>
    <div class="container">
        <h2>Formulario de Registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div>
                <label for="nombre">Nombre:</label>
                <Field type="text" id="nombre" name="name" placeholder="Ingresa tu nombre" required />
                <ErrorMessage name="name" />
            </div>
            <div>
                <label for="email">Email:</label>
                <Field type="email" id="email" name="email" placeholder="Ingresa tu email" required />
                <ErrorMessage name="email" />
            </div>

            <button type="submit">Registrar</button>
        </Form>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';

const onSubmit = () => {
    console.log("Se ha enviado el mensaje")
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    color: #000;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
}

.container h2 {
    text-align: center;
}

input[type=text],
input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #45a049;
}
</style>