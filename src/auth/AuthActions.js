import React from "react";

import { AuthContext } from "./auth-context";

export function AuthActions() {
    return (
        <AuthContext.Consumer>
            {({ user, changeUser }) => (
                <div>
                    {
                        user ?
                        <button onClick={() => changeUser(null)} > Logout </button> :
                        <section>
                            <div>
                                <button onClick={() => changeUser({ name: "I", role: "inspector" })} >Login as Inspector</button>
                            </div>
                            <div>
                                <button onClick={() => changeUser({ name: "M", role: "mananger" })} >Login as Manager</button>
                            </div>
                        </section>
                    }
                </div>
            )}
        </AuthContext.Consumer>
    )
}