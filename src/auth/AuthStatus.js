import React from "react";

import { AuthContext } from "./auth-context";

export function AuthStatus() {
    return (
        <AuthContext.Consumer>
            {({ user }) => (
                <div>
                    {
                        user ?
                        `Welcome, ${user.name}` :
                        "Not logged in"
                    }
                </div>
            )}
        </AuthContext.Consumer>
    )
}
