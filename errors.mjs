export const errorCodes = {
    INVALID_ARGUMENT: 1000,
    NOT_FOUND: 1001,
    UNAUTHORIZED: 1002,
    INVALID_USER: 1003,
    INVALID_TOKEN: 1004,
    INVALID_CREDENTIALS: 1005
}

export const errors = {
    INVALID_ARGUMENT: (argumentName) => {
        return {
            code: errorCodes.INVALID_ARGUMENT,
            message: `Invalid ${argumentName}`
        }
    },
    NOT_FOUND: () => {
        return {
            code: errorCodes.NOT_FOUND,
            message: `Not found`
        }
    },
    UNAUTHORIZED: () => {
        return {
            code: errorCodes.UNAUTHORIZED,
            message: `Unauthorized`
        }
    },
    INVALID_TOKEN: () => {
        return {
            code: errorCodes.INVALID_TOKEN,
            message: `Invalid Token`
        }
    },

    INVALID_USER: () => {
        return {
            code: errorCodes.INVALID_USER,
            message: `Invalid User`
        }
    },
    INVALID_CREDENTIALS: () => {
        return {
            code: errorCodes.INVALID_CREDENTIALS,
            message: `Invalid User`
        }
    }
}