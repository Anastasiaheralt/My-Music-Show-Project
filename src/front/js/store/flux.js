const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      user: null,
      message: null,
      providers: [],
      user: JSON.parse(localStorage.getItem("user")) || [],
      providerEspecifico: [],
      proveedorActual: null,
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
        localStorage.removeItem("user");
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
              userType: data.user_type,
            });
            localStorage.setItem("user", JSON.stringify(getStore().user));
            console.log(store.user + "desde la store");
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
            client: true,
            provider: false,
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
            provider: true,
            client: false,
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

      getProviders: async () => {
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const store = getStore();
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/admin",
            opts
          );
          if (resp.ok) {
            const data = await resp.json();

            setStore({ ...store, providers: data });

            // setStore({
            //   token: data.token,
            //   user: data.provider || data.user,
            //   userType: data.user_type,
            // });

            return true;
          }
          alert("Ocurrio un error");
          return false;
        } catch (error) {
          console.log("Ocurrio un error al cargar proveedores");
        }
      },
      getProvidersEspecifico: async (proveedor) => {
        console.log(proveedor);
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const store = getStore();
          const resp = await fetch(
            process.env.BACKEND_URL + `/provider/${proveedor}`,
            opts
          );
          if (resp.ok) {
            const data = await resp.json();

            setStore({ ...store, providerEspecifico: data });

            // setStore({
            //   token: data.token,
            //   user: data.provider || data.user,
            //   userType: data.user_type,
            // });

            return true;
          }
          alert("Ocurrio un error");
          return false;
        } catch (error) {
          console.log("Ocurrio un error al cargar proveedores");
        }
      },

      getProviderById: async (proveedor) => {
        console.log(proveedor);
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const store = getStore();
          const resp = await fetch(
            process.env.BACKEND_URL + `/api/proveedores/${proveedor}`,
            opts
          );
          if (resp.ok) {
            const data = await resp.json();

            setStore({ ...store, proveedorActual: data });

            return true;
          }
          alert("Ocurrio un error");
          return false;
        } catch (error) {
          console.log("Ocurrio un error al cargar proveedores");
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
            process.env.BACKEND_URL + "/api/hello",
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
    },
  };
};

export default getState;
