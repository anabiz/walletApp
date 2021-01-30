export type userType = {
    name: string,
    email: string,
    password: string,
    user_type: string,
    main_currency: string
}

export type accountTypeEntity = {
    currency_id: string,
    amount: number,
    user_id: string,
    is_main: boolean
}

