import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../components/Form";
import { Loader } from "../components/Loader";
import { Notes } from "../components/Notes";
import { AlertContext } from "../contexts/alert/alertContext";
import { FirebaseContext } from "../contexts/firebase/firebaseContext";



export const Home = () => {

    const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)
    const alert = useContext(AlertContext)

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Form />
            <hr />

            {loading
                ? <Loader />
                : <Notes notes={notes} onRemove={removeNote} alert={alert} />
            }
        </Fragment>
    )
}