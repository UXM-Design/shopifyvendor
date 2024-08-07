'use server'
import { cookies } from "next/headers";



export async function vendorRegister(name: string, email: string, password: string) {

    try {

        console.log(process.env.NEXT_PUBLIC_API_ENDPOINT_URL)

        const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT_URL + '/auth/register', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),

        });

        const { status, token, data, message } = await response.json();

        if (status == true) {

            // localStorage.setItem('access_token', token);
            cookies().set('access_token', token)

            return {
                status: 200
            }
        } else {

            console.log('Coming');
            console.log(message);

            return {
                status: 400,
                errorMessage: message
            }
        }
    } catch (error) {

        console.log(error)

        return {
            status: 500
        };
    }


}

export async function vendorLogin(email: string, password: string) {

    try {

        const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT_URL + '/auth/login', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                account: email,
                password: password
            }),

        });

        const { status, token, data, message } = await response.json();

        if (status == true) {

            if (data.is_verified != undefined && data.is_verified == 1) {

                localStorage.setItem('access_token', token);

                // localStorage.setItem('user_data', JSON.stringify(data));

                cookies().set('access_token', token);

                cookies().set('user_data', JSON.stringify(data));


            } else {

                // localStorage.setItem('login_email', email);

                cookies().set('login_email', email);


            }

            return {
                status: 200,
                is_verified: data.is_verified
            }
        } else {

            return {
                status: 400,
                errorMessage: message
            }
        }
    } catch (error) {
        // dispatch({ type: SHOP_USER_LOGIN_ERROR })

        console.log(error)
        return {
            status: 500
        }
    }

}


