import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudFrom from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const {db,loading,error}= useContext(CrudContext) 
  return (
    <div>
      <h2>CRUD API con Context API</h2>
      <article className="grid-1-2">
        <CrudFrom />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText} `}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudApi;
