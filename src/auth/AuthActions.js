import React from "react";

import { AuthContext } from "./auth-context";
import { PERMISSIONS } from "../access-control/permissions";

const userRoleConfig = {
    manager: {
        name: "M",
        role: "manager",
        permissions: [
            PERMISSIONS.READ_STATS,
            PERMISSIONS.CONTROL_EMERGENCYALERT,
            PERMISSIONS.CONTROL_REACTOR
        ]
    },
    inspector: {
        name: "I",
        role: "inspector",
        permissions: [
            PERMISSIONS.READ_STATS
        ]
    }
}

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
                                <button onClick={() => changeUser(userRoleConfig.inspector)} >Login as Inspector</button>
                            </div>
                            <div>
                                <button onClick={() => changeUser(userRoleConfig.manager)} >Login as Manager</button>
                            </div>
                        </section>
                    }
                </div>
            )}
        </AuthContext.Consumer>
    )
}