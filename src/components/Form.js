import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EditReactForm from "./EditReactForm";
import ReactForm from "./ReactForm";

function Form() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [whereTo, setWhereTo] = useState(null);
    const [token, setToken] = useState(null);
    const [id, setId] = useState(null);
    useEffect(() => {
        const q = searchParams.get('q');
        const where = searchParams.get('where');
        const sfid = searchParams.get('sfid');
        setWhereTo(where);
        setToken(q);
        setId(sfid);
    }, []);
    return (
        <>
        {whereTo === 'edit' ? <EditReactForm id={id} token={token} /> : <ReactForm token={token} id={id}/> }
        </>
    );
    
}

export default Form;