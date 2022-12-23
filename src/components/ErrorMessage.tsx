import React from "react";

import {ErrorMessageInterface} from "../models";

export function ErrorMessage({error}: ErrorMessageInterface) {


    return (
        <p className='text-center text-red-600'>{error}</p>
    )
}