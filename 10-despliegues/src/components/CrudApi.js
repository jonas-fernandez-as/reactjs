import CrudFrom from "./CrudForm";
import CrudTable from "./CrudTable";
import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res))

        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setError(res);
          setDb(null);
        }

        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data)

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>

      <HashRouter>
        <header>
          <h2>CRUD API con rutas</h2>
          <nav>
            <NavLink className="active" to="santos/">
              Santos
            </NavLink>
            <NavLink className to="santos/agregar">
              Agregar
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route
            path="santos/*"
            element={
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      {" "}
                      {loading && <Loader />}
                      {error && (
                        <Message
                          msg={`Error ${error.status}: ${error.statusText} `}
                          bgColor="#dc3545"
                        />
                      )}
                      {db && (
                        <CrudTable
                          data={db}
                          setDataToEdit={setDataToEdit}
                          deleteData={deleteData}
                        />
                      )}
                    </>
                  }
                />
                <Route
                  path="/agregar"
                  element={
                    <CrudFrom
                      createData={createData}
                      updateData={updateData}
                      dataToEdit={dataToEdit}
                      setDataToEdit={setDataToEdit}
                    />
                  }
                />
                <Route
                  path="/editar/:id"
                  element={
                    <CrudFrom
                      createData={createData}
                      updateData={updateData}
                      dataToEdit={dataToEdit}
                      setDataToEdit={setDataToEdit}
                    />
                  }
                />
              </Routes>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default CrudApi;
