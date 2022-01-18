import React from 'react'
import LU_E_Reg from './LU_user_reg_form'
import NON_LU_E_Reg from './Non_LU_user_form'


import LU_E_Reg_mem_4 from './LU member/member4'

export default function index_form_reg() {


    const token = window.localStorage.getItem('jwt_user_token_v2');
    const token_event = window.localStorage.getItem('jwt_user_token_event');

    return (
        <>
            {token?<LU_E_Reg  />:
            token_event?<NON_LU_E_Reg/> :'hello please register 1st'}
        </>
    )
}
