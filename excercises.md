## JS (ES6)

**What is an arrow function? What are all its uses? How it differs from a normal function?**
- Una función flecha es una manera de expresar funciones.
- Para acceder más fácil a propiedades empleando _this_
- No incluyen la palabra _function_, no requieren _return_ a menos que tengan más de una línea,

**What is an generator function?**
- Es aquella que retorna un objeto _generator_
- Se puede identificar porque se expresa como _function*_

**What is hoisting in JS?**
- Se puede resumir en realizar declarariones al principio del código.

**What is a callback hell?**
- Se refiere al uso de _calbacks_ dentro de otros _callbacks_
- Esto hace que el código sea dífícil de probar

**What is an event loop?**
- Es una fila de funciones donde recaen las funciones asíncronas para poder continuar ejecutando el código.
- Una vez terminadas las funciones asíncronas son ejecutadas.

## ReactJS

**What is ReactDOM and what is the difference between ReactDOM and React?**
- ReactDOM es una librería para manipular el _DOM_. Emplea una copia virtual para sólo actualizar las diferencias al estár desarrollando.
- React es el _core_ que ayuda a crear componentes y que emplea _ReactDOM_ para renderizarlos.

**What are the differences between a class component and functional component?**
- Un componente de clase requiere importar _Component_ de la librería React y funciona similar a un objeto, puede contener _constructor_, _super_, las funciones se manejan como métodos.
- Un componente funcional retorna _JSX_ y se maneja de la misma manera.

**What is the difference between state and props?**
- Los _props_ se reciben en un componente por parámetros y _state_ es el estado que se declara en un principio dentro del componente.
