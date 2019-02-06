import React from "react";
import get from "lodash/get";

import { AuthContext } from "./auth/auth-context";

import { AuthActions } from "./auth/AuthActions"
import { AuthStatus } from "./auth/AuthStatus";

import { AccessControl } from "./access-control/AccessControl";
import { NoAccess } from "./access-control/NoAccess";
import { PERMISSIONS } from "./access-control/permissions";

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

                <AuthContext.Consumer>
                    {({ user }) => {
                        const userPermissions = get(user, "permissions", []);

                        return (
                            <div>
                                <AccessControl
                                    userPermissions={userPermissions}
                                    allowedPermissions={[]}
                                    renderNoAccess={() => <NoAccess />}
                                >
                                    Public info
                                </AccessControl>

                                <AccessControl
                                    userPermissions={userPermissions}
                                    allowedPermissions={[PERMISSIONS.READ_STATS]}
                                    renderNoAccess={() => <NoAccess />}
                                >
                                    Stats
                                </AccessControl>

                                <AccessControl
                                    userPermissions={userPermissions}
                                    allowedPermissions={[PERMISSIONS.CONTROL_EMERGENCYALERT]}
                                    renderNoAccess={() => <NoAccess />}
                                >
                                    Emergency alert
                                </AccessControl>

                                <AccessControl
                                    userPermissions={userPermissions}
                                    allowedPermissions={[PERMISSIONS.CONTROL_EMERGENCYALERT]}
                                    renderNoAccess={() => <NoAccess />}
                                >
                                    Control reactor
                                </AccessControl>
                            </div>
                        )
                    }}
                </AuthContext.Consumer>
            </AuthContext.Provider>
        )
    }
}