# vinted_front

Cliente web en Angular 15 (mayo de 2023, ciclo de DAM) de una práctica de tienda de ropa de segunda mano inspirada en Vinted. Habla con la API [vinted_back](https://github.com/IkerAbad/vinted_back).

## Qué hay

- Registro e inicio de sesión con JWT, con un interceptor HTTP y almacenamiento de la sesión, y páginas de perfil y de usuario, administrador y moderador.
- Productos: listado, ver, crear, editar y borrar (`/producto/...`).
- Pedidos: servicio y componente para consultarlos y crearlos.
- Plantilla visual con Bootstrap 4 en `src/plantilla`.
- `ng build` compila sin errores, con un aviso de que el tamaño supera el presupuesto por defecto. No lo he usado contra el servidor desde aquí.

## Cómo probarlo

Arranca antes `vinted_back` en `http://localhost:8080` (la dirección está escrita en los servicios) y luego:

```
npm ci
npx ng serve
```

Abre `http://localhost:4200/`.

## Licencia

MIT, ver [LICENSE](LICENSE). La parte de autenticación parte de un ejemplo público de Angular con JWT y la plantilla de `src/plantilla` es de terceros; la licencia cubre mi código.

---

# vinted_front (English)

An Angular 15 web client (May 2023, DAM vocational course) for a second-hand clothing store assignment inspired by Vinted. It talks to the [vinted_back](https://github.com/IkerAbad/vinted_back) API.

## What's inside

- Sign-up and login with JWT, with an HTTP interceptor and session storage, plus profile pages and user, admin and moderator boards.
- Products: list, view, create, edit and delete (`/producto/...`).
- Orders: a service and component to fetch and create them.
- A Bootstrap 4 visual template in `src/plantilla`.
- `ng build` compiles without errors, with a warning that the bundle exceeds the default size budget. I have not used it against the server from here.

## Trying it

Start `vinted_back` first at `http://localhost:8080` (the address is hardcoded in the services) and then:

```
npm ci
npx ng serve
```

Open `http://localhost:4200/`.

## License

MIT, see [LICENSE](LICENSE). The authentication part starts from a public Angular JWT example and the template in `src/plantilla` is third-party; the license covers my code.
