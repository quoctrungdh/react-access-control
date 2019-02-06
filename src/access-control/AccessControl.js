import union from "lodash/union";
import isEmpty from "lodash/isEmpty";

function checkPermissions(userPermissions, allowedPermissions) {
    if (isEmpty(allowedPermissions)) {
        return true;
    }

    return userPermissions.some(permission => allowedPermissions.includes(permission))
}

export function AccessControl({
    children,
    userPermissions,
    allowedPermissions,
    renderNoAccess
}) {
    const isPermitted = checkPermissions(userPermissions, allowedPermissions)

    if (isPermitted) {
        return children
    }

    return renderNoAccess()
}