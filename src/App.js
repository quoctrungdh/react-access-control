import React from "react";

import { AuthContext } from "./auth/auth-context";

import { AuthActions } from "./auth/AuthActions"
import { AuthStatus } from "./auth/AuthStatus";

export class App extends React.Component {
    state = {
        user: null
    }

    changeUser = (user) => this.setState({ user })

    render() {
        return (
            <AuthContext.Provider
                value={{
                    user: this.state.user,
                    changeUser: this.changeUser
                }}
            >
                <AuthActions />
                <AuthStatus />
            </AuthContext.Provider>
        )
    }
}