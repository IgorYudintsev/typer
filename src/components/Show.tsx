import React from 'react';
import {DataStateType} from "../dataState/dataState";
import {Content} from "./Content";
import {useParams} from "react-router-dom";


export const Show = (props: DataStateType) => {
    const params = useParams()

    return (
        <>
            <Content pages={props.pages} route={Number(params.id)}/>
        </>
    );
};

