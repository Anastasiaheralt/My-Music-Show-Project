const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      user: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      syncToken: () => {
        const token = sessionStorage.getItem("token");
        console.log("sincronizando token Storage");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Sesion terminada");
        setStore({ token: null });
      },

      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/login",
            opts
          );
          if (resp.ok) {
            const data = await resp.json();
            alert("iniciado con exito");
            sessionStorage.setItem("token", data.token);
            setStore({
              token: data.token,
              user: data.provider || data.user,
            });

            return true;
          }
          alert("Ocurrio un error");
          return false;
        } catch (error) {
          console.log("Ocurrio un error en el login");
        }
      },

      addRegister: async (data) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.nombre,
            email: data.correo,
            password: data.password,
            terms: data.aceptarterminos,
          }),
        };
        try {
          // fetching data from the backend
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/user_register",
            opts
          );
          if (resp.ok) {
            window.alert("¡Registrado con éxito!");
            const data = await resp.json();
            return data;
          }
          return undefined;
          // don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      addRegisterProvider: async (data) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.nombre,
            email: data.correo,
            password: data.password,
            service: data.servicio,
            terms: data.aceptarterminos,
          }),
        };
        try {
          // fetching data from the backend
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/provider_register",
            opts
          );
          if (resp.ok) {
            window.alert("¡Proveedor registrado con éxito!");
            const data = await resp.json();
            //setStore({ message: data.message });
            return data;
          }
          return undefined;
          // don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getMessage: async () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };

        try {
          // fetching data from the backend
          const resp = await fetch(
            "https://3001-jechf-proyectofinal-nphql2inxuv.ws-us63.gitpod.io/api/hello",
            opts
          );
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
