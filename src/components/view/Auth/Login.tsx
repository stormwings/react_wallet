import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useForm from 'react-hook-form'
import './Auth.scss'

import {
    authSignIn,
    authClearErrors,
} from './../../../redux/actions/authActions'
import SvgBitcoin from './../../../assets/components/SvgBitcoin'
import HeaderContainer from './../../../components/containers/HeaderContainer/HeaderContainer'
import ScreenContainer from './../../../components/containers/ScreenContainer/ScreenContainer'
import Separator from './../../../components/dumb/Separator/Separator'
import { Title } from './../../dumb/Text/Text'
import Input from './../../dumb/Input/Input'
import Button from './../../dumb/Button/Button'

const Login = () => {
    const { key, errors } = useSelector((state: any) => state.auth)
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (errors) dispatch(authClearErrors())
    }, [dispatch, errors])

    const onSubmit = (values: object) => {
        dispatch(authSignIn(values))
    }

    // check authentication successful
    if (key) return <Redirect to={'/'} />

    return (
        <div className="container">
            <div id="responsive--screen">
                <HeaderContainer />
                <ScreenContainer className="hover">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{ display: 'contents' }}
                    >
                        <div className="welcome--image">
                            <Title
                                content="Glad to see you!"
                                className="text-center"
                            />
                            <SvgBitcoin className="welcome--icon" />
                        </div>
                        {errors && (
                            <p className="option">
                                {errors.map((error: string, i: number) => (
                                    <i
                                        key={i}
                                        className="auth_error_message red"
                                    >
                                        {error}
                                    </i>
                                ))}
                            </p>
                        )}
                        <p className="option">
                            example = user: testing pass: testing63{' '}
                        </p>
                        <div className="form--container">
                            <Input
                                id="auth_input_username"
                                name="username"
                                labelText="Username"
                                inputRef={register}
                                required
                                autoComplete={false}
                            />
                            <Separator className="empty" />
                            <Input
                                id="auth_input_password"
                                name="password"
                                labelText="Password"
                                type="password"
                                inputRef={register}
                                required
                                autoComplete={false}
                            />
                        </div>
                        <Separator className="empty" />
                        <Button
                            className="--primary"
                            content="Confirm"
                            onClick={() => console.log('click')}
                        />
                    </form>

                    <p className="option">
                        Dont have an account?{' '}
                        <Link to="/register" className="blue">
                            Sign Up
                        </Link>
                    </p>
                </ScreenContainer>
            </div>
        </div>
    )
}

export default Login
